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
}

// render(state.Home);
