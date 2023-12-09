//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("burger").addEventListener("click", function () {
//     document.querySelector(".container__header").classList.toggle("open");
//   })
// })

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.getElementById("burger");
  const containerHeader = document.querySelector(".container__header");

  burgerButton.addEventListener("click", function () {
    containerHeader.classList.toggle("open");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const pageName = path.split('/').pop().replace('.html', '');

  document.body.classList.add('page', pageName);
});



