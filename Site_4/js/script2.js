let elemScroll = document.querySelectorAll(".scrol");
elemScroll[0].addEventListener("click", scroll);
elemScroll[1].addEventListener("click", scroll);
let scrollheight = document.documentElement.clientHeight;
function scroll() {
  window.scrollBy({ top: scrollheight, behavior: "smooth" });
}

const anchors = document.querySelectorAll('.ankhor');
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
if (document.documentElement.scrollWidth < 565) {
    let video1 = document.querySelectorAll("#oneVideo");
    let video2 = document.querySelectorAll("#twoVideo");
    for (let elem of video1) {
        elem.style.display = 'none';
    }
    for (let elem of video2) {
        elem.style.display = 'block';
    }

}
let m = document.getElementById("canvas2");
let xtc = m.getContext("2d");

let wc = (m.width = 300),
    xc = wc / 2;
let hc = (m.height = 300),
    yc = hc / 2;
let frames2 = 0;
let dar = Math.PI / 180;
let R2 = 100;
xtc.strokeStyle = "#99d70a";

let points2 = [];

function Point2(a) {
    this.rand = rnd() * 360;
    this.a = a;
    this.r = R2 + (R2 / 5) * Math.sin(this.rand * dar);
    this.x = xc + this.r * Math.cos(a * dar);
    this.y = yc + this.r * Math.sin(a * dar);
}

for (let a = 0; a < 360; a += 10) {
    let p = new Point2(a);
    points2.push(p);
}

function conectar2(o) {
    xtc.fillStyle = Grd2(xc, yc, 1.5 * R2);
    let ultimo = o.length - 1; // último punto del objeto o
    let pu0 = puntoDeUnion(o, ultimo, 0);
    xtc.beginPath();
    xtc.moveTo(pu0.x, pu0.y);
    for (i = 0; i < o.length - 1; i++) {
        let pui = puntoDeUnion(o, i, i + 1);
        xtc.quadraticCurveTo(o[i].x, o[i].y, pui.x, pui.y);
    }
    xtc.quadraticCurveTo(o[ultimo].x, o[ultimo].y, pu0.x, pu0.y);

    xtc.fill();
}

function puntoDeUnion(o, a, b) {
    let pu = {};
    pu.x = (o[a].x + o[b].x) / 2;
    pu.y = (o[a].y + o[b].y) / 2;
    return pu;
}

function Animacion2() {
    elId = window.requestAnimationFrame(Animacion2);
    frames2++;
    xtc.clearRect(0, 0, wc, hc);

    for (i = 0; i <= points2.length - 1; i++) {
        let p = points2[i];
        p.a += 0.1;
        p.r = R2 + (R2 / 2.5) * Math.sin((frames2 + p.rand) * dar);
        p.x = xc + p.r * Math.cos(p.a * dar);
        p.y = yc + p.r * Math.sin(p.a * dar);
    }
    conectar2(points2);
}
elId = window.requestAnimationFrame(Animacion2);

function Grd2(x, y, r) {
    grd = xtc.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, "#F9D93A");
    grd.addColorStop(0.3, "#ffdd00");
    grd.addColorStop(1, "#d9bc00");
    return grd;
}

function rnd() {
    // a @tmrDevelops function
    Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff;
    return Math.abs(Math.seed >> 16) / 32869;
}
