$(function(){
    createSticky($(".header"));
});
function createSticky(sticky) {
    
    if (typeof sticky !== "undefined") {

        var pos = sticky.offset().top + 10,
                win = $(window);
            
        win.on("scroll", function() {
            win.scrollTop() >= pos ? sticky.addClass("header-active") : sticky.removeClass("header-active");      
        });         
    }
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

var footerParaHeight = $(".footer").height();
$(".content").css("margin-bottom",footerParaHeight);