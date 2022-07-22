var per = document.querySelector('.per');
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = parseInt( (winScroll / height) * 100);
  per.innerHTML = scrolled+"% "+"Scrolled";
}
