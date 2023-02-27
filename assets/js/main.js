$(document).ready(function(){

  $("#bikas_open_modal").click(function() {
    $('#payment_method_planactivity_modal').addClass('hide-me');
    $('#payment_method_planactivity_modal').removeClass('show-me');
    $('#bikas_modal_open').addClass('show-me');
    $('#bikas_modal_open').removeClass('hide-me');
    $('#nogo_modal_open').addClass('hide-me');
    $('#nogo_modal_open').removeClass('show-me');
  });


  $("#nogo_open_modal").click(function() {
  $('#payment_method_planactivity_modal').addClass('hide-me');
  $('#payment_method_planactivity_modal').removeClass('show-me');
  $('#bikas_modal_open').addClass('hide-me');
  $('#bikas_modal_open').removeClass('show-me');
  $('#nogo_modal_open').addClass('show-me');
  $('#nogo_modal_open').removeClass('hide-me');

  });

  $("#prev_one").click(function() {
      $('#nogo_modal_open').addClass('hide-me');
      $('#nogo_modal_open').removeClass('show-me');

      $('#bikas_modal_open').addClass('hide-me');
      $('#bikas_modal_open').removeClass('show-me');

      $('#payment_method_planactivity_modal').addClass('show-me');
      $('#payment_method_planactivity_modal').removeClass('hide-me');
  });

  $("#prev_two").click(function() {
      $('#nogo_modal_open').addClass('hide-me');
      $('#nogo_modal_open').removeClass('show-me');

      $('#bikas_modal_open').addClass('hide-me');
      $('#bikas_modal_open').removeClass('show-me');

      $('#payment_method_planactivity_modal').addClass('show-me');
      $('#payment_method_planactivity_modal').removeClass('hide-me');
  });

});


 

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
let current = 1;

nextBtns.forEach((btn) => {
btn.addEventListener("click", () => {
formStepsNum++;
updateFormSteps();
updateProgressbar();
});
});
prevBtns.forEach((btn) => {
btn.addEventListener("click", () => {
formStepsNum--;
updateFormSteps();
updateProgressbar();
});
});
function updateFormSteps() {
formSteps.forEach((formStep) => {
formStep.classList.contains("form-step-active") &&
formStep.classList.remove("form-step-active");
});
formSteps[formStepsNum].classList.add("form-step-active");
}
function updateProgressbar() {
progressSteps.forEach((progressStep, idx) => {
if (idx < formStepsNum + 1) {
progressStep.classList.add("progress-step-active");
} else {
progressStep.classList.remove("progress-step-active");
}
});
const progressActive = document.querySelectorAll(".progress-step-active");
progress.style.width =
((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});



