jQuery(document).ready(function($) {
    $(document).on('click','.ds07-hamburger',function(e){
        $(".header-left").animate({
            width: "toggle"
        });
    });
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView:2,
        spaceBetween: 10,
        loop:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     hide: true,
        // },
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
      });
      
});









