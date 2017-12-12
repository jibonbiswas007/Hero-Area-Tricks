(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$(".mainmenu ul li").on("click", function(){
    		$(".mainmenu ul li").removeClass("active");
    		$(this).addClass("active");
    	});
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));