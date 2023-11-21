const submitBtn = document.querySelector(".btn__submit");
const rateBtns = document.querySelectorAll(".btn__rate");
let userRate;

rateBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    userRate = i + 1;
  });
});

const updateUI = function (userRate) {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".thank-you-wrapper").style.display = "grid";

  document.querySelector(
    ".user-rate"
  ).innerHTML = `You selected ${userRate} out of 5`;
};

submitBtn.addEventListener("click", () => {
  updateUI(userRate);
});
