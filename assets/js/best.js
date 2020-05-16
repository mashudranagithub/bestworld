jQuery(document).ready(function($){
	$('.carousel').carousel();

	$('.wish-list .far.fa-heart').click(function(){
		$(this).hide();
		$(this).siblings('.fas.fa-heart').show();
	});

	$('.wish-list .fas.fa-heart').click(function(){
		$(this).hide();
		$(this).siblings('.far.fa-heart').show();
	});


    //Code for sticky menu Start Here
    var x = $('.menu-section').offset().top; 
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        
        if(y>x){
            $('.menu-section').addClass('sticky');
           }else{
            $('.menu-section').removeClass('sticky');
           }
    });
    $('.menu-section').wrapAll('<div class="cover">');
    $('.cover').css('min-height', $('.menu-section').outerHeight());
    $('.cover').css('height', 'auto');
    //Code for sticky menu End Here





    // News & Events Slider Start Here
    $('.news-events-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
	    smartspeed:1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});
    // News & Events Slider End Here







	// product quick view codes start here

	$('.quick-view').click(function(){
		$('.product-quick-view').css({
			"visibility": "visible",
			"opacity": "1",
		});
		$('body').addClass('overlay');
	});

	$('.product-quick-view-close').click(function(){
		$('.product-quick-view').css({
			"visibility": "hidden",
			"opacity": "0",
		});
		$('body').removeClass('overlay');
	});

	// product quick view codes end here






	// Related Products Slider Start Here
    $('.related-products-slider').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
	    smartspeed:1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:4
	        }
	    }
	});
    // Related Products Slider End Here



    //jQuery Code for back to top
	$(window).scroll(function(){    
	    var wScroll = $(this).scrollTop();

	    var showScrollButton = 5;

	    if(wScroll > showScrollButton){
	        $('#top').fadeIn();  
	    }else{
	        $('#top').fadeOut();
	    }

	});


	//creating clidk function
	$('#top').click(function(){
	    $('body, html').animate({
	       scrollTop:0 
	    }, 2000);
	    return false;
	});







	// Shopping Cart Codes Start Here
	$('.minus').click(function(){
		let value = $(this).siblings('.quantity-number').val();
		value = isNaN(value) ? 0 : value;
		if(value>1){
			value --;
	    	$(this).siblings('.quantity-number').val(value);
		}
	});

	$('.plus').click(function(){
		let value = $(this).siblings('.quantity-number').val();
		value = isNaN(value) ? 0 : value;
		// Product Quantity Highest Value Control from the below code 
		if(value<100){
			value ++;
	    	$(this).siblings('.quantity-number').val(value);
		}
	});

	// Product Remove from cart page
	$('.product-remove').click(function(){
		$(this).parent('tr').remove();
	});
	// Shopping Cart Codes End Here







//faq toggle

    //Faq Toggle Heading with answer
    $('.faq-toggle .answer').hide();
    $('.faq-toggle h2:first').addClass('active').next().slideDown('fast');
    $('.faq-toggle h2').click(function() {
        if($(this).next().is(':hidden')) {
            $('.faq-toggle h2').removeClass('active').next().slideUp('fast');
            $(this).toggleClass('active').next().slideDown('fast');
        }
    });





});









