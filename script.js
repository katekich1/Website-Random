window.addEventListener("load", function() {
    const menuSections = document.querySelectorAll(".menu-section");
    
    menuSections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("active");
        
        const menuCards = section.querySelectorAll(".menu-card");
        menuCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("active");
          }, index * 200); // Tambahkan delay untuk efek animasi
        });
      }, index * 500); // Tambahkan delay untuk efek animasi
    });
  });
  