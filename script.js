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
   })

   navButton.addEventListener("mouseover", () => {
    body.classList.toggle("button");

   })


   catalogButton.addEventListener('click', () => {
    const autosSection = document.querySelector('.autos-catalog');  // replace with the actual class or ID
    autosSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
       
    });
});

