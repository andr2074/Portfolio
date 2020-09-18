let liBlog = document.querySelectorAll('#ul_blog li');
let content_1 = document.querySelectorAll('blog__content');
let contents = document.querySelector('#contents');
let content_scroll = document.querySelector('.blog__contents-scroll');




document.querySelector('.fulscreen__hover').addEventListener('click', scroll);
const anchors = document.querySelectorAll('.menu__link');
for (let anchor of anchors) {
	anchor.addEventListener("click", scroll)
};
function scroll(e) {
	e.preventDefault();
	const blockID = this.getAttribute('href');
	document.querySelector(blockID).scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
}

document.querySelector('.header__menu-btn').addEventListener("click", function(e) {

	document.body.classList.toggle("o-h");
	e.preventDefault();
	this.classList.toggle("menu_btn_active");
	document.querySelector('.menu').classList.toggle("menu_active");
	for (let anchor of anchors) {
		anchor.addEventListener("click", function(e) {
			document.querySelector('.menu').classList.toggle("menu_active");
			document.querySelector('.header__menu-btn').classList.toggle("menu_btn_active");
			document.body.classList.toggle("o-h");
		})
	};
})

let detalisSwiper = new Swiper ('.detalis__container', {
	slidesPerView: 1,
	slideClass: 'detalis__paragraphs',
	pagination: {
		el: '.detalis__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass:'detalis__pagination-bullet',
		bulletActiveClass:'detalis__pagination-bullet-active',
	},
	autoplay: {
		delay: 2500,
	},
	speed: 800
})

let theTeamSwiper = new Swiper ('.theTeam__container', {
	slidesPerView: 1,
	slideClass: 'theTeam__block',
	// direction: 'vertical',
	pagination: {
		el: '.theTeam__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass:'theTeam__pagination-bullet',
		bulletActiveClass:'theTeam__pagination-bullet-active',
	},
	autoplay: {
		delay: 3000,
	},
	speed: 800
})

let blogSwiper = new Swiper ('.blog__container', {
	slidesPerView: 1,
	spaceBetween: 50,
	slideClass: 'blog__content',
	direction: 'vertical',
	pagination: {
		el: '.blog__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass:'blog__pagination-bullet',
		bulletActiveClass:'blog__pagination-bullet-active',
	},
	autoplay: {
		delay: 3000,
	},
	speed: 800
})