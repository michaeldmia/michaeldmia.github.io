//Side Nav//
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.transition = ".6s";
  document.getElementById("close-button").style.display = "unset";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transition = ".3s";
    document.getElementById("close-button").style.display = "none";
};
//Parallax Bannner//
function parallax() {
    var $slider = document.getElementById("slider");
    var yPos = window.pageYOffset / $slider.dataset.speed;
    yPos = -yPos;
    var coords = '0% '+ yPos + 'px';
    $slider.style.backgroundPosition = coords;
}
window.addEventListener("scroll", function(){
    parallax(); 
});
//Header//
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos  > currentScrollPos) {
      document.getElementById("header").style.top = "0";
      document.getElementById("header").style.transition = ".4s";
      document.getElementById("sticky-menu").style.transition = ".4s";
      document.getElementById("sticky-menu").style.top = "150px";

  } else {
      document.getElementById("header").style.top = "-150px";
      document.getElementById("sticky-menu").style.top = "50px";
  }
  prevScrollpos = currentScrollPos;
};
//Scroll top top//
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//Open Link in New Tab//
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
//Site Alert//
// Get all elements with class="closebtn"
var close = document.getElementsByClassName("close-alert");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}