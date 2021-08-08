import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;
  addEventListener();
}

render();

function addEventListener() {
  // add menu toggle to bars icon in nav bar
  //document.querySelector(".fa-bars").addEventListener("click", () => {
  //  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  //});

  // Select userIcon
  let show = function(e) {
    e.classList.addEventListener("is-visible");
  };
  let hide = function(e) {
    e.classList.remove("is-visible");
  };
  let toggle = function(e) {
    e.classList.toggle("is-visible");
  };

  const userIcon = document.getElementById("userIcon");
  userIcon.addEventListener(
    "click",
    e => {
      console.log("you just moused over me");
      if (!e.target.classList.contains("toggle")) return;

      let content = document.querySelector(e.target.hash);
      if (!content) return;

      toggle(content);
    },
    false
  );
}
