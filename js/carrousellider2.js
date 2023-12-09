document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos del primer carrusel
    const carousel1 = document.getElementById("carousel2");
    const prevButton1 = document.querySelector(".prev-button-2");
    const nextButton1 = document.querySelector(".next-button-2");

   

    let currentIndex1 = 0;
   

    const products = [
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        
    ];


    prevButton1.addEventListener("click", () => {
        if (currentIndex1 > 0) {
            currentIndex1 -= 4;
            updateCarousel(carousel1, currentIndex1);
        }
    });

    nextButton1.addEventListener("click", () => {
        if (currentIndex1 < products.length - 8) {
            currentIndex1 += 4;
            updateCarousel(carousel1, currentIndex1);
        }
    });



    function updateCarousel(carousel, currentIndex) {
        const itemWidth = carousel.children[0].offsetWidth + 20; // 20px de margen
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});
