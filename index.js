import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  if (st.view === "Create") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;

      const requestData = {
        title: inputList.dreamtitle.value,
        content: inputList.dreamcontent.value
      };

      axios
        .post(`${process.env.API}/dreams`, requestData)
        .then(response => {
          state.Dream.dreams.push(response.data);
          router.navigate("/");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  axios
    .get(`${process.env.API}/dreams`)
    .then(response => {
      let dreamBlockAmt = response.data.length - 1;
      console.log(dreamBlockAmt);

      for (let i = dreamBlockAmt; i > 0; i--) {
        document.querySelector(
          "#mainhomecontent"
        ).innerHTML += `<a href="/Dream/${response.data[i]._id}"><div class="dream-card" id="dreamcard">
          <h1 id="dreamtitle">${response.data[i].title}</h1>
             <p class="dreamdataid">${response.data[i]._id}</P>
         <div class="dream-preview" id="dreampreview">
          ${response.data[i].content}
         </div>
      </div></a>`;
      }
    })

    .catch(error => {
      console.log("It puked", error);
    });

  if (window.location.href.indexOf("6") > -1) {
    var dreamURL = window.location.href.slice(-24);
    window.sessionStorage.setItem("current", dreamURL);
    router.navigate("/dream");
  }

  if (st.view === "Dream") {
    axios
      .get(
        `${process.env.API}/dreams/${window.sessionStorage.getItem("current")}`
      )
      .then(response => {
        document.querySelector("#dream-post-body").innerHTML += `
        <h1 class="dream-post-title">${response.data.title}</h1>
        <p>${response.data.content}</p>`;
      })
      .catch(error => {
        console.log("It puked", error);
      });
  }
}
