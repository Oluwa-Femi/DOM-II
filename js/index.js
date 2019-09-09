// Your code goes here
//Select elements
let header = document.querySelector("header");
let logo = document.querySelector(".logo-heading");
let headers = document.querySelector(".intro h2");
let input = document.querySelector(".input");
let navItems = document.querySelectorAll(".nav-link");
let go = document.querySelector(".text-content h2");
let images = document.querySelectorAll("img");
console.log(images);
let fontColor = "#212529";
let buttons = document.querySelectorAll(".btn");

//Add event: Enlarge logo
logo.addEventListener("click", event => {
  logo.style.fontSize = "50px";
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
  
// Add event: scroll
let counter = 0;
window.addEventListener("scroll", function(event) {
  console.log("scroll!");
  counter++;
  if (counter > 200) {
    alert("Hey! Hol up! Scroll up");
    counter = 0;
  }
});

//Add event: Resize effect and alert
window.addEventListener("resize", function(event) {
    alert("This will fit your screen spec more!");
  });

  //Add event: load
window.addEventListener("load", function(event) {
    console.log("Welcome!");
  });
  
  // Add event: Contact click
buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      alert("A member of our team will reach out to you");
    });
  });
