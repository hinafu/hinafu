$(document).ready(function() {
	$(".header__background__list").slick({
		autoplay: true,
		arrows: false,
		fade: true,
		speed: 500
	});

	var altoScroll = window.height;
	$(window).scroll(function() {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > altoScroll) $(".section__menu").addClass("alt_menu");
		else $(".section__menu").removeClass("alt_menu");

		//altoScroll = iCurScrollPos;
	});

	$(".values").slider({
		min: 0,
		max: 100,
		value: 50,
		slide: function(e, ui) {
			var opacity = ui.value;
			$(".header__background__over").css("opacity", (opacity / 100));
			$(".values_value").html(opacity + "%");
		}
	});
});