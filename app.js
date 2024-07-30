document.addEventListener("DOMContentLoaded", function () {
  const headerOptions = document.querySelectorAll(".header2 div");
  const popups = document.querySelectorAll(".popup_box");

  headerOptions.forEach((option) => {
    option.addEventListener("click", function (event) {
      const popupId = this.getAttribute("data_popup");
      const popup = document.getElementById(popupId);
      const popuplists = popup.querySelectorAll('.menu li');
      let currentlist = popuplists[0];
      let currentcontent = document.querySelector(`#${currentlist.className}_content`)


      // Close any open popups
      popups.forEach((p) => (p.style.display = "none"));

      // Open the clicked popup if it exists
      if (popup) {
        popup.style.display = "flex";
     
      }
      if (currentcontent) {
        currentcontent.style.display = "grid";
        
      }
      popuplists.forEach((li) => {
        li.addEventListener("click", function (e) {
          e.stopPropagation();
    
          let child = document.getElementById(`${li.className}_content`);
          if (currentcontent) {
            currentcontent.style.display = "none";
          }
    
          if (child) {
            currentcontent = child;
            currentcontent.style.display = "grid";
            
          }
        });
      });
      // Stop propagation to avoid closing the popup immediately
      event.stopPropagation();
    });
  });

  
  
  
  
  
  // Close popup if clicked outside
  document.addEventListener("click", function (event) {
    const isClickInsidePopup = event.target.closest(".popup_box");
    const isClickOnHeaderOption = event.target.closest(".header2 div");

    if (!isClickInsidePopup && !isClickOnHeaderOption) {
      popups.forEach((popup) => (popup.style.display = "none"));
    }
  });






});
