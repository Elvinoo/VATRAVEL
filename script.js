document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".plus");
  const minusButtons = document.querySelectorAll(".minus");
  plusButtons.forEach((plusButton) => {
    plusButton.addEventListener("click", handlePlusButton);
  });
  minusButtons.forEach((minusButton) => {
    minusButton.addEventListener("click", handleMinusButton);
  });
  function handlePlusButton(e) {
    e.target.style.display = "none";
    const minus = e.target.nextElementSibling;
    const day = e.target.parentElement.parentElement;
    const dayDetails = e.target.parentElement.nextElementSibling;
    dayDetails.style.display = "block";
    day.classList.add("grid");
    minus.style.display = "inline";
  }

  function handleMinusButton(e) {
    e.target.style.display = "none";
    const dayDetails = e.target.parentElement.nextElementSibling;
    dayDetails.style.display = "none";
    const day = e.target.parentElement.parentElement;
    day.classList.remove("grid");
    const plus = e.target.previousElementSibling;
    plus.style.display = "inline";
  }
  const menuButton = document.querySelector(".menu-button");
  const buttonsAfterHover = document.querySelector(".buttons-after-hover");
  const buttonsBeforeHover = document.querySelector(".buttons-before-hover");
  buttonsAfterHover.style.display = "none";

  function handleMouseOver() {
    buttonsAfterHover.style.display = "flex";
    buttonsBeforeHover.style.display = "none";
  }
  function handleMouseOut() {
    buttonsAfterHover.style.display = "none";
    buttonsBeforeHover.style.display = "flex";
  }
  menuButton.addEventListener("mouseover", handleMouseOver);
  buttonsAfterHover.addEventListener("mouseover", handleMouseOver);
  buttonsAfterHover.addEventListener("mouseout", handleMouseOut);

  const options = ["all", "cultural", "eco", "event", "health"];
  const selectedOption = "all";

  function handleOptionClick(option) {
    options.forEach((opt) => {
      const element = document.getElementById(opt);
      if (opt === option) {
        element.classList.add("selected");
      } else {
        element.classList.remove("selected");
      }
    });
  }

  options.forEach((opt) => {
    const element = document.getElementById(opt);
    element.addEventListener("click", function () {
      handleOptionClick(opt);
    });
  });

  handleOptionClick(selectedOption);
});
