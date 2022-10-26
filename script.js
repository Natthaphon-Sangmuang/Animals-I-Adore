// text box reveal add animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;

    if (elementTop < windowHeight / 1.25) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

// typing text add animation

function typeanimate1() {
  var target = document.querySelector(".p3-sect4-text1");
  var windowHeight = window.innerHeight;
  var elementTop = target.getBoundingClientRect().top;

  if (elementTop < windowHeight / 1.25) {
    target.classList.add("animate1");
  } else {
    target.classList.remove("animate1");
  }
}

function typeanimate2() {
  var target = document.querySelector(".p3-sect4-text2");
  var windowHeight = window.innerHeight;
  var elementTop = target.getBoundingClientRect().top;

  if (elementTop < windowHeight / 1.25) {
    target.classList.add("animate2");
  } else {
    target.classList.remove("animate2");
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", typeanimate1);
window.addEventListener("scroll", typeanimate2);
