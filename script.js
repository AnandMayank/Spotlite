// Initialize Swiper


const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable infinite loop
    spaceBetween: 30, // Space between slides
    slidesPerView: 1, // Initial number of slides to show

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Pagination settings
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Make pagination bullets clickable
      dynamicBullets: true, // Dynamic size for pagination bullets
    },
  
    // Responsive breakpoints for different screen sizes
    breakpoints: {
      768: {
        slidesPerView: 2, // 2 slides on medium screens
      },
      1024: {
        slidesPerView: 3, // 3 slides on larger screens
      },
    },
  });
  

  /*
<script>
  // Initialize Swiper with proper configuration
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Allows infinite scrolling
    spaceBetween: 30, // Space between slides
    direction: 'horizontal', // Horizontal carousel

    // Navigation arrows configuration
    navigation: {
      nextEl: '.swiper-button-next', // Right arrow
      prevEl: '.swiper-button-prev', // Left arrow
    },

    // Pagination (bullets) configuration
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allow bullets to be clickable
      dynamicBullets: true, // Dynamic size of bullets
    },

    // Responsive settings for the number of visible slides
    breakpoints: {
      0: {
        slidesPerView: 1 // Show 1 slide for small screens
      },
      768: {
        slidesPerView: 2 // Show 2 slides for medium screens
      },
      1024: {
        slidesPerView: 3 // Show 3 slides for large screens
      }
    }
  }); */
