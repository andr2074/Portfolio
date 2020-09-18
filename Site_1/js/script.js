let a = document.querySelector('.description__title');
let portraitBig = document.querySelector('.description__portrait-big');
let portraits = document.querySelectorAll('.description__portrait');

for (let portrait of portraits) {
	portrait.addEventListener('click', function(e) {
		portraitBig.children[0].src = portrait.children[0].src;
		a.innerHTML = portrait.children[0].dataset.text;
	});
}

document.querySelector('.header__burger').addEventListener('click', burger_active);
function burger_active(e) {
	e.preventDefault();
	document.querySelector('.header__burger').classList.toggle('header__burger-active');
	document.querySelector('.header__navbar').classList.toggle('header__navbar-active');
	document.querySelector('body').classList.toggle('body-active');
	const headerLinks = document.querySelectorAll('.header__link');
	for (let headerLink of headerLinks) {
		headerLink.addEventListener('click', burger_active);
	};
};
const anchors = document.querySelectorAll('.header__link, .fullscreen__btn');
for (let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
	e.preventDefault();
	const blockID = this.getAttribute('href');
	document.querySelector(blockID).scrollIntoView({
		behavior: "smooth",
		block: "start"
		});
	})
};


const productsLinks = document.querySelectorAll('.products__link');
const productsContent = document.querySelector('.products__contents');

for (let productsLink of productsLinks) {
	productsLink.addEventListener('click', function(e) {
		e.preventDefault();
		for (let elem of productsContent.children) {
			fadeOut(elem);
		};
		switch (this.id) {
			case "products__link-1":
				fadeIn(productsContent.children[0]);
				fadeIn(productsContent.children[1]);
				break;
			case "products__link-2":
				fadeIn(productsContent.children[2]);
				fadeIn(productsContent.children[3]);
				break;
			case "products__link-3":
				fadeIn(productsContent.children[4]);
				fadeIn(productsContent.children[5]);
				break;
			case "products__link-4":
				fadeIn(productsContent.children[6]);
				fadeIn(productsContent.children[7]);
				break;
			default:
				for (let elem of productsContent.children) {
					fadeIn(elem);
				};
		};
	});
};

function fadeOut(elem) {
	elem.classList.add('hide');
	elem.classList.remove('show');
};
function fadeIn(elem) {
	elem.classList.remove('hide');
	elem.classList.add('show');
};


let theTeamSwiper = new Swiper ('.description__container', {
	slidesPerView: 1,
	slideClass: 'description__item',
	autoplay: {
		// delay: 3000,
	},
	speed: 800
})