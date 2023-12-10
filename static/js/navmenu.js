document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const menu = document.getElementById("menu");
    const slider = document.getElementById("nav-slide");
    const cross = document.getElementById("cross");
  
    toggleButton.addEventListener("click", function () {
      slider.classList.toggle("hidden");
    });
    cross.addEventListener("click", function () {
      slider.classList.toggle("hidden");
    });
  
    // Check the screen size on initial load
    checkScreenSize();
  
    // Check the screen size when the window is resized
    window.addEventListener("resize", checkScreenSize);
  
    function checkScreenSize() {
      // Use window.innerWidth to get the current window width
      const screenWidth = window.innerWidth;
  
      // Set the breakpoint for toggling the menu
      const breakpoint = 768; // Adjust this value according to your design
  
      // Toggle the menu based on the screen size
      if (screenWidth < breakpoint) {
        menu.classList.add("hidden");
        toggleButton.classList.remove("hidden");
      } else {
        menu.classList.remove("hidden");
        toggleButton.classList.add("hidden");
      }
    }
  });