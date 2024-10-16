const body = document.querySelector("body"),
   sidebar = body.querySelector(".sidebar"),
   toggle = body.querySelector(".toggle"),
   modeSwitch = body.querySelector(".toggle-switch"),
   navButton = body.querySelector("nav-text"),
   modeText = body.querySelector(".mode-text");


   toggle.addEventListener("click", () => {
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


