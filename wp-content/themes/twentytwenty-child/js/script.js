window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("site-header");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= 1) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}