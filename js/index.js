function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("catalogContent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("catalogLinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += "active";
}

$(document).ready(function(){
	// bannerSwiper
	var swiper = new Swiper(".bannerSwiper", {
		spaceBetween: 30,
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 2900,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
		// partnersSwiper
		var swiper = new Swiper(".partnersSwiper", {
			loop: true,
			autoplay: {
			delay: 1,
			disableOnInteraction: false
			},
				slidesPerView: '5',
				speed: 2000,
				grabCursor: true,

		});


		var num = 50;
		$(window).bind('scroll', function () {
				if ($(window).scrollTop() > num) {
						$('.header__menu').addClass('fixed');
				} else {
						$('.header__menu').removeClass('fixed');
				}
		});

		
})

// Example starter JavaScript for disabling form submissions if there are invalid fields
$(document).ready(function(){
	(function () {
		'use strict'
	
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation')
	
		// Loop over them and prevent submission
		Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', function (event) {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
					}
	
					form.classList.add('was-validated')
				}, false)
			})
	})()
})

$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});

	// serv3Swiper
	var swiper = new Swiper(".serv3Swiper", {
		effect: "cube",
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});


	$(function() {
		function slideMenu() {
			var activeState = $("#menu-container .accordionCatalog").hasClass("active");
			$("#menu-container .accordionCatalog").animate({left: activeState ? "0%" : "-100%"}, 400);
		}
		$("#menu-wrapper").click(function(event) {
			event.stopPropagation();
			$("#hamburger-menu").toggleClass("open");
			$("#menu-container .accordionCatalog").toggleClass("active");
			slideMenu();
	
			$("body").toggleClass("overflow-hidden");
		});
	
		$(".accordionCatalog").find(".accordion-toggle").click(function() {
			$(this).next().toggleClass("open").slideToggle("fast");
			$(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
	
			$(".accordionCatalog .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
			$(".accordionCatalog .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
		});
	}); // jQuery load
	
});

$(document).ready(function(){
  $('body').append('<a href="#" id="go-top"><i class="fi-rr-arrow-small-up"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.link');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordionCatalog'), false);
})



// в корзину

$(document).ready(function(){
	const icon = document.getElementById("icon");
	const button = document.getElementById("button");
	
	const buttonTextContainer = button.querySelector(".button-text-container");
	const add = button.querySelector(".add");
	const added = button.querySelector(".added");
	

	
	button.addEventListener("click", (evt) => {
		evt.preventDefault();
		button.classList.toggle("in-cart");
	});
	
	button.addEventListener("click", (evt) => {
		evt.preventDefault();
		icon.classList.toggle("icon-transform");
	});
	
	button.addEventListener("click", (evt) => {
		evt.preventDefault();
		const rect = button.getBoundingClientRect();
		let ripple = button.querySelector(".ripple");
		if (ripple && ripple.parentNode) {
			ripple.parentNode.removeChild(ripple);
		}
		ripple = document.createElement("span");
		ripple.className = "ripple";
		ripple.style.height = ripple.style.width =
			Math.max(rect.width, rect.height) + "px";
		button.appendChild(ripple);
		const top =
			evt.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
		const left =
			evt.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
		ripple.style.top = top + "px";
		ripple.style.left = left + "px";
	});
	
	button.addEventListener("click", (evt) => {
		evt.preventDefault();
	
		add.style.display = add.style.display === "none" ? "block" : "none";
		added.style.display = added.style.display === "block" ? "none" : "block";
	
		// buttonTextContainer.style.width = `${added.getBoundingClientRect().width}px`;
	
		return false;
	
		//button.querySelector('.add')
	
		/*
		{
					targets: '.battery',        
					opacity: '1',
					duration: 250,
					easing: 'easeInOutQuad'
			},
			begin: function() {
			 document.querySelector(".battery").style.display = "block";
			}
			*/
	
		anime({
			targets: ".unitless-values-demo .el",
			translateX: 250, // -> '250px'
			rotate: 540 // -> '540deg'
		});
	
		anime
			.timeline()
			.add({
				targets: "#button .add",
				opacity: ml4.opacityIn,
				scale: ml4.scaleIn,
				duration: ml4.durationIn,
				display: "block",
				opacity: 0
			})
			.add({
				targets: "#button .added",
				display: "block",
				opacity: 0,
				scale: ml4.scaleOut,
				duration: ml4.durationOut,
				easing: "easeInExpo",
				delay: ml4.delay,
				begin: function () {
					document.querySelector(".add").style.display = "block";
					document.querySelector(".added").style.display = "block";
				}
			});
	});
	
	var ml4 = {};
	ml4.opacityIn = [0, 1];
	ml4.scaleIn = [0.2, 1];
	ml4.scaleOut = 3;
	ml4.durationIn = 800;
	ml4.durationOut = 600;
	ml4.delay = 500;
	
	anime
		.timeline({ loop: true })
		.add({
			targets: ".ml4 .letters-1",
			opacity: ml4.opacityIn,
			scale: ml4.scaleIn,
			duration: ml4.durationIn
		})
		.add({
			targets: ".ml4 .letters-1",
			opacity: 0,
			scale: ml4.scaleOut,
			duration: ml4.durationOut,
			easing: "easeInExpo",
			delay: ml4.delay
		})
		.add({
			targets: ".ml4 .letters-2",
			opacity: ml4.opacityIn,
			scale: ml4.scaleIn,
			duration: ml4.durationIn
		})
		.add({
			targets: ".ml4 .letters-2",
			opacity: 0,
			scale: ml4.scaleOut,
			duration: ml4.durationOut,
			easing: "easeInExpo",
			delay: ml4.delay
		})
		.add({
			targets: ".ml4 .letters-3",
			opacity: ml4.opacityIn,
			scale: ml4.scaleIn,
			duration: ml4.durationIn
		})
		.add({
			targets: ".ml4 .letters-3",
			opacity: 0,
			scale: ml4.scaleOut,
			duration: ml4.durationOut,
			easing: "easeInExpo",
			delay: ml4.delay
		})
		.add({
			targets: ".ml4",
			opacity: 1,
			duration: 500,
			delay: 500
		});



		// basket
		

})


// filter
function w3_open() {
	document.getElementById("mySidebar").style.display = "flex";
}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
}

$('.color option:eq(1)').prop('selected', true).css('backgroundColor','black');

  $('a').children('i').hover(function() {
    $('table').css('transform', 'scale(0.8)').css('transition', 'all 1s');
	$('#totalAmount').css('transform', 'scale(0.8)').css('transition', 'all 1s');
	$('#mainContent').css('backgroundColor','rgba(211,211,211,0.6)');
	$('.hide').slideDown('slow');
  }, function() {
    // on mouseout, reset the background colour
    $('table').css('transform', '');
	$('#totalAmount').css('transform','');
	$('#mainContent').css('backgroundColor','');
	$('.hide').slideUp('slow');
  });
	
	$('.fi-rr-minus-small').click(function() {
		var val_input = $(this).closest('tr').find('.qty');
		if (val_input.val() <= 0) { return; }
		val_input.val(parseInt(val_input.val() - 1));
		
		var price = $(this).closest('tr').find('.price');
		var cost = $(this).closest('tr').find('.cost');
		cost.val((parseFloat(price.val()) * val_input.val()).toFixed(2));
			
		total_cost();
	});

	$('.fi-rr-plus-small').click(function() {
		var val_input = $(this).closest('tr').find('.qty');
    //alert(val_input.val());
		if (val_input.val() >=20) { return; }
		val_input.val(parseInt(val_input.val()) + 1);
		
		var price = $(this).closest('tr').find('.price');
		var cost = $(this).closest('tr').find('.cost');
		cost.val((parseFloat(price.val()) * val_input.val()).toFixed(2));
		
		total_cost();
	});
	
	$('.fi-rr-trash').click(function() {
		$(this).closest('tr').remove();
		
		total_cost();
	});

function total_cost() {
	var total = 0;
	$.each($('.cost'), function(index, value){
		total += parseFloat($(value).val());
		});
	total = total.toFixed(2);
	$('#total').val(total);
}
//restart the page
//$('#button').click(function(){
//  location.reload();
//});