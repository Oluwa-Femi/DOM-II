// Your code goes here
//Select elements
let logo = document.querySelector(".logo-heading");

//Add event: Enlarge logo
logo.addEventListener("click", event => {
  logo.style.fontSize = "60px";
});

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

  

