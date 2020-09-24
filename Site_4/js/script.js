function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  })
}
loadData().then(() => {
    let preloaderEl = document.querySelector('.preloader');
    let preloaderEl_Img = document.querySelector('.preloader img');
    preloaderEl.classList.add('hidden');
    preloaderEl_Img.classList.add('hidden');
    preloaderEl.classList.add('hidden');
    preloaderEl_Img.classList.remove('visible');
  });
let fullBody = document.getElementById('cl-body');
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let span = document.querySelector(".menu-btn span");
let mL = document.querySelector(".title_content span.m-l");

if (document.body.offsetWidth < 768) {
    window.addEventListener('scroll', function() {
        let windowScroll =  window.scrollY;
        [...document.querySelectorAll(".face")].map((el, i) => {
                let face = el.getBoundingClientRect();
                if ( face.top <= ((face.height / 3) + 80) && (face.top >= -190) ) {
                    el.classList.add("active");
                }else{
                    el.classList.remove("active");
                }
            }
        );
    });
}

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    menuBtn.classList.toggle("menuBtn_active");
    menu.classList.toggle("menu_active");
    if (fullBody.className == 'page page-home') {
        mL.classList.toggle("mL_active");
    }
    document.addEventListener('click', clickOutside);
});

function clickOutside(event) {
    if (!menu.contains(event.target) && menuBtn != event.target && !!menu && !!(menu.offsetWidth || menu.offsetHeight || menu.getClientRects().length)) {
        menuBtn.classList.remove("menuBtn_active");
        menu.classList.remove("menu_active");
        mL.classList.remove("mL_active");
        document.removeEventListener('click', clickOutside);
    }
}

if (fullBody.className == 'page page-home') {
    
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");

    let cw = (c.width = 300),
        cx = cw / 2;
    let ch = (c.height = 300),
        cy = ch / 2;
    let frames = 0;
    let rad = Math.PI / 180;
    let R = 100;
    ctx.strokeStyle = "#99d70a";

    let points = [];

    function Point(a) {
        this.rand = rnd() * 360;
        this.a = a;
        this.r = R + (R / 5) * Math.sin(this.rand * rad);
        this.x = cx + this.r * Math.cos(a * rad);
        this.y = cy + this.r * Math.sin(a * rad);
    }

    for (let a = 0; a < 360; a += 10) {
        let p = new Point(a);
        points.push(p);
    }

    function conectar(o) {
        ctx.fillStyle = Grd(cx, cy, 1.5 * R);
        let ultimo = o.length - 1; // último punto del objeto o
        let pu0 = puntoDeUnion(o, ultimo, 0);
        ctx.beginPath();
        ctx.moveTo(pu0.x, pu0.y);
        for (i = 0; i < o.length - 1; i++) {
            let pui = puntoDeUnion(o, i, i + 1);
            ctx.quadraticCurveTo(o[i].x, o[i].y, pui.x, pui.y);
        }
        ctx.quadraticCurveTo(o[ultimo].x, o[ultimo].y, pu0.x, pu0.y);

        ctx.fill();
    }

    function puntoDeUnion(o, a, b) {
        let pu = {};
        pu.x = (o[a].x + o[b].x) / 2;
        pu.y = (o[a].y + o[b].y) / 2;
        return pu;
    }

    function Animacion() {
        elId = window.requestAnimationFrame(Animacion);
        frames++;
        ctx.clearRect(0, 0, cw, ch);

        for (i = 0; i <= points.length - 1; i++) {
            let p = points[i];
            p.a += 0.1;
            p.r = R + (R / 2.5) * Math.sin((frames + p.rand) * rad);
            p.x = cx + p.r * Math.cos(p.a * rad);
            p.y = cy + p.r * Math.sin(p.a * rad);
        }
        conectar(points);
    }
    elId = window.requestAnimationFrame(Animacion);

    function Grd(x, y, r) {
        grd = ctx.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, "#F9D93A");
        grd.addColorStop(0.3, "#ffdd00");
        grd.addColorStop(1, "#d9bc00");
        return grd;
    }

    function rnd() {
        // a @tmrDevelops function
        Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
        return Math.abs(Math.seed >> 16) / 3286;
    }
}