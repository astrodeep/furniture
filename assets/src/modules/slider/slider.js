 jQuery('.owl-carousel').owlCarousel({
     loop:true,
     margin:0,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             autoplay:false,
             dots:true,
             nav:false
         },
         600:{
             items:1,
             nav:false,
             dots:true,
             autoplay:false
         },
         1000:{
             items:1,
             autoplay:false,
             nav:false,
             loop:false
         },

         1100:{
             items:1,
             autoplay:false,
             nav:true,
             loop:false
         }




     }
 });



