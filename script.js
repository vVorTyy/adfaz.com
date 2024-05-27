const container = document.getElementById("container-one");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const containerTwo = document.getElementById("container-two");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  containerTwo.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  containerTwo.classList.remove("active");
});

let angr = document.querySelector("#register");

let form = document.getElementsByTagName("form")[0];
let friName = form.getElementsByTagName("input")[0];
let email = form.getElementsByTagName("input")[1];
let time = form.getElementsByTagName("input")[2];
let date = form.getElementsByTagName("input")[3];
let FrisButton = form.getElementsByTagName("button")[0];

let formTwo = document.getElementsByTagName("form")[1];
let friNameTwo = document.getElementsByTagName("input")[4];
let emailTwo = document.getElementsByTagName("input")[5];
let orderNu = document.getElementsByTagName("input")[6];
let timeTwo = document.getElementsByTagName("input")[7];
let dateTwo = document.getElementsByTagName("input")[8];
let buttonFormTwo = document.getElementsByTagName("button");
let secButton = formTwo.querySelector("button");

let formThree = document.getElementsByTagName("form")[2];
let userNa = formThree.getElementsByTagName("input")[0];
let lastNa = formThree.getElementsByTagName("input")[1];
let exDate = formThree.getElementsByTagName("input")[2];

let payButton = formThree.querySelector("button");

window.onload = function () {
  angr.remove;
};

secButton.addEventListener("click", function (e) {
  if (friNameTwo.value === "") {
    e.preventDefault();
    console.log("friNameTwo");
    friNameTwo.style.border = "red solid 1px";
  }

  if (emailTwo.value === "") {
    e.preventDefault();
    console.log("emailTwo");
    emailTwo.style.border = "red solid 1px";
  }

  if (orderNu.value === "") {
    e.preventDefault();
    console.log("orderNu");
    orderNu.style.border = "red solid 1px";
  }

  if (timeTwo.value === "") {
    e.preventDefault();
    console.log("timeTwo");
    timeTwo.style.border = "red solid 1px";
  }

  if (dateTwo.value === "") {
    e.preventDefault();
    console.log("dateTwo");
    dateTwo.style.border = "red solid 1px";
  }
});
