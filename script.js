// Method 1

// let question1 = "Qual o seu nome?";
// let question2 = "Qual a sua idade?";
// let question3 = "Qual o seu estado civíl?";

// document.getElementById("btnForward").addEventListener("click", function () {
//   document.getElementById("outputPer").innerText = question1;
// });

// document.getElementById("btnBack").addEventListener("click", function () {
//   document.getElementById("outputPer").innerText = question2;
// });

// Method 2

const btnBack = document.getElementById("btnBack");
const btnForward = document.getElementById("btnForward");

btnBack.addEventListener("click", goBack);
btnForward.addEventListener("click", goForward);

const questions = [
  "Qual o seu nome?",
  "Qual a sua idade?",
  "Qual o seu estado civíl?",
];

function goBack() {
  document.getElementById("outputPer").innerText = questions;
}

function goForward() {
  document.getElementById("outputPer").innerText = questions;
}
