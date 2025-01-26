const body = document.querySelector("body"),
   sidebar = body.querySelector(".sidebar"),
   toggle = body.querySelector(".toggle"),
   openArrow = body.querySelector(".open-arrow"),
   modeSwitch = body.querySelector(".toggle-switch"),
   navButton = body.querySelector("nav-text"),
   catalogButton = document.getElementById("autos-button"),
   modeText = body.querySelector(".mode-text");


   toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
   })

   openArrow.addEventListener("click", () => {
    sidebar.classList.toggle("close");
   })

   modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        modeText.innerText = "Modo Día";
    }else {
        modeText.innerText = "Modo Noche";
    }
   });



  let scrollBar = document.querySelector(".autos-catalog");
  let backButton = document.getElementById("backButton"); 
  let nextButton = document.getElementById("nextButton");

 

  nextButton.addEventListener("click", () => {
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft += 1000;
  })

  backButton.addEventListener("click", () => {
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft -= 1000;
  })