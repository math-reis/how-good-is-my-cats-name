const btnBack = document.getElementById("btnBack");
const btnForward = document.getElementById("btnForward");

btnBack.addEventListener("click", goBack);
btnForward.addEventListener("click", goForward);

function goBack() {
  console.log("Back");
}

function goForward() {
  console.log("Foward");
}

// var question = document.getElementById("outputPer");
// var btn = document.getElementById("btnBack");
// let backQuestion = question1;
// let backBtn = "Anterior";
// btn.addEventListener("click", function () {
//   const tmpquestion = question.innerHTML;
//   const tmpBtn = btn.innerHTML;
//   question.innerHTML = backQuestion;
//   btn.innerHTML = backBtn;
//   backQuestion = tmpquestion;
//   backBtn = tmpBtn;
// });
