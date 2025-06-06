let mybutton = document.getElementById("button2");

window.onscroll = function() {
  const button = document.getElementById("button2");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}