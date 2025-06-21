(function($) {
    "use strict";

$(document).ready(function() {
$(".skpTpcnt").click(function() {
     $('html, body').animate({
         scrollTop: $(".abtSecNew").offset().top
     }, 500);
 });
});

document.addEventListener("DOMContentLoaded", function () {
  function showDateTime() {
    var myDiv = document.getElementById("myDiv");

    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dayName = dayList[date.getDay()]; // Get day name (e.g., "Thu")
    var monthName = monthNames[date.getMonth()]; // Get month name (e.g., "October")
    var dayOfMonth = date.getDate(); // Get day of the month (e.g., 5)
    var year = date.getFullYear(); // Get full year (e.g., 2023)

    // Format the date as "Thu, 5 October, 2023"
    var today = `${dayName} ${dayOfMonth} ${monthName} ${year}`;

    // Format the time to ensure two digits for hours, minutes, and seconds
    var hour = date.getHours().toString().padStart(2, "0"); // Ensure two digits
    var min = date.getMinutes().toString().padStart(2, "0"); // Ensure two digits
    var sec = date.getSeconds().toString().padStart(2, "0"); // Ensure two digits

    var time = `${hour}:${min}:${sec}`;
    myDiv.textContent = `Today is ${today}. Time is ${time}`;
  }

  showDateTime(); // Call immediately to avoid delay
  setInterval(showDateTime, 1000); // Update every second
});

$(document).ready(function() {
  var resize = new Array('div', '.resizable');
  resize = resize.join(',');

  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
  $(".reset").click(function() {
    $(resize).css('font-size', resetFont);
  });

  //increases font size when "+" is clicked
  $(".increase").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });

  //decrease font size when "-" is clicked

  $(".decrease").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });

});

jQuery(document).ready(function(){
$('.admnsTabDiv ul li').click(function(){
  $('.hidebkingTab').hide();
  var admnsTabId = $(this).attr('rel');
  $('#'+admnsTabId).show();
});
});

jQuery(document).ready(function($) {
  "use strict";
  var owl = $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 5,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 5
      },
      1170: {
        items: 7
      }
    }
  });

  // Pause on hover over carousel & highlight the item
  $('#customers-testimonials').on('mouseenter', '.owl-item', function() {
    owl.trigger('stop.owl.autoplay');
    $(this).addClass('highlight-item'); // Add highlight class
  }).on('mouseleave', '.owl-item', function() {
    owl.trigger('play.owl.autoplay');
    $(this).removeClass('highlight-item'); // Remove highlight class
  });
});



        /*-------------------------------------------
        preloader active
        --------------------------------------------- */
   /*     jQuery(window).load(function() {
           jQuery('.preloader').fadeOut('slow');
        });*/

        /*-------------------------------------------
        Sticky Header
        --------------------------------------------- */
   /*     $(window).on('scroll', function(){
            if( $(window).scrollTop()>80 ){
                $('#sticky').addClass('stick');
            } else {
                $('#sticky').removeClass('stick');
            }
        }); */

        jQuery(document).ready(function(){
          /*--------------------------------
            Bootstrap Dropdown Animation
          -----------------------------------*/
          // Add slideDown animation to Bootstrap dropdown when expanding.
            $('.dropdown').on('show.bs.dropdown', function() {
              $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
          });

          // Add slideUp animation to Bootstrap dropdown when collapsing.
          $('.dropdown').on('hide.bs.dropdown', function() {
              $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
          });

          /*-------------------------------------------
          js wow active
          --------------------------------------------- */
          new WOW().init();
  
          /*-------------------------------------------
          js scrollup
          --------------------------------------------- */
          $.scrollUp({
              scrollText: '<i class="fa fa-angle-up"></i>',
              easingType: 'linear',
              scrollSpeed: 500,
              animation: 'fade'
          }); 

          /*-------------------------------------------
          testimonial-slide active Partner Organisation
          --------------------------------------------- */
          $(document).ready(function(){
  $(".partner-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
        nav: false
      },
      576: {
        items: 4,
        nav: false
      },
      768: {
        items: 5,
        nav: true
      },
      992: {
        items: 7,
      },
      1500: {
        items: 9,
      }
    }
  });
});
          /*---------------------------------
          venobox Popup active
          -----------------------------------*/
          $('.popup-video').venobox(); 
  
          /*---------------------------------
          isotope activation 
          -----------------------------------*/
          $('.grid').appear(function() {
            // filter items on button click
            $('.filtering-button').on('click', 'li', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });
            var $grid = $('.grid').isotope({
              // set itemSelector so .grid-sizer is not used in layout
              itemSelector: '.grid-item',
              percentPosition: true,
              animationOptions: {
                duration: 500,
                easing: 'zoom-in'
              },
              masonry: {
                // use element for option
                columnWidth: '.grid-item'
              },
              transitionDuration: '.9s'
            })

            $('.filtering-button li').on('click',  function () {
              $('.filtering-button li').removeClass('active');
              $(this).addClass('active');
            });
          });
            
          /*---------------------------------
          counterUp active
          -----------------------------------*/
          jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
          });
          
          /*---------------------------------
          niceSelect active
          -----------------------------------*/
          jQuery('select').niceSelect();
        
        });

    })(jQuery);

    // Carousel Pause Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselExampleDark');
    const pauseBtn = document.getElementById('carouselPauseBtn');
    let isPaused = false;
    let carouselInstance = new bootstrap.Carousel(carousel);
    
    pauseBtn.addEventListener('click', function() {
        if (isPaused) {
            // Resume the carousel
            carouselInstance.cycle();
            pauseBtn.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i><span class="visually-hidden">Pause slideshow</span>';
            pauseBtn.setAttribute('aria-label', 'Pause slideshow');
            isPaused = false;
        } else {
            // Pause the carousel
            carouselInstance.pause();
            pauseBtn.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i><span class="visually-hidden">Play slideshow</span>';
            pauseBtn.setAttribute('aria-label', 'Play slideshow');
            isPaused = true;
        }
    });
});