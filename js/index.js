// Your code goes here
//Select elements
let header = document.querySelector("header");
let logo = document.querySelector(".logo-heading");
let headers = document.querySelector(".intro h2");
let input = document.querySelector(".input");
let navItems = document.querySelectorAll(".nav-link");

//Add event: Enlarge logo
logo.addEventListener("click", event => {
  logo.style.fontSize = "60px";
});
addHover(logo);
//Add event : mouse over links and image on header
header.addEventListener("mouseover", function(event) {
    event.preventDefault();
  });
  
  //Add event : mouseenter + mouse leave , prevent click
  navItems.forEach(function(item) {
    addHover(item);
    item.addEventListener("click", function(event) {
      event.preventDefault();
    });
  });

  function addHover(item) {
    item.addEventListener("mouseenter", function(event) {
      item.style.color = "#f21d4f";
    });
  
    item.addEventListener("mouseleave", function(event) {
      item.style.color = fontColor;
    });
  }

  go.addEventListener("click", function(event) {
    let img = document.querySelector(".img-content");
    img.classList.toggle("rotate");
  });
  //Add event: Add opacity to background images
images.forEach(function(img) {
    img.addEventListener("mouseenter", function(item) {
      img.style.opacity = ".3";
    });
  
    img.addEventListener("mouseleave", function(item) {
      img.style.opacity = "1";
    });
  });
  
