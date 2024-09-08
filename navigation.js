let nav = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  let scrollValue = window.scrollY;

  if (scrollValue > 10) {
    nav.setAttribute("style", "background-color:pink !important;");
  }
  if (scrollValue > 200) {
    nav.setAttribute("style", "background-color:purple !important;");
  }
  if (scrollValue > 400) {
    console.log('run')
    nav.removeAttribute("style")
    nav.setAttribute("style", "background-color:khaki !important;");
  }

  if (scrollValue > 800) {
    console.log('run')
    nav.removeAttribute("style")
    nav.setAttribute("style", "background-color:hotpink !important;");
  }

})