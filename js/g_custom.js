$(document).ready(function(){
	  $(window).scroll(function(){
         if($(this).scrollTop()>50){
            $('.top_hd').addClass('fixed_header');
         }
         else{
            $('.top_hd').removeClass('fixed_header');
         }
      });

      jQuery(window).bind("load", function() {
         if(jQuery(window).scrollTop()>10){
           jQuery('.top_hd').addClass('fixed_header');
        }
     });
});