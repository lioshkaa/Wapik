let animItems = document.querySelectorAll(".anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animScroll);
  function animScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const element = animItems[index];
      const animItemHeight = element.offsetHeight;
      const animItemOffset = offset(element).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
function Burger(x){
  if(x.classList.toggle("change"))
  openNav();
  else{
    closeNav();
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
 

}
function closeNav() {
  document.getElementById("mySidenav").style.width= "0";
}
