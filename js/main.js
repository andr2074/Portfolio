$(document).ready(function() {
	$(".navbar__link").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top - 75}, 300);
	});
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() >= 50) {
			$('header').addClass('header__white');
		}
		else if ($(window).scrollTop() < 50) {
			$('header').removeClass('header__white');
		}
	});
})