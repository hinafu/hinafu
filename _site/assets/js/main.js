$(document).ready(function() {
	$(".header__background__list").slick({
		autoplay: true,
		arrows: false,
		fade: true
	});

	var altoScroll = 200;
	$(window).scroll(function() {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > altoScroll) $(".section__menu").addClass("alt_menu");
		else $(".section__menu").removeClass("alt_menu");

		//altoScroll = iCurScrollPos;
	});
});