import color from "../Utils/variable.js";

function ahead(selector) {
    let speedl = 0.01,
        speedu = 0.03;
    
    let curWinWidth = window.innerWidth,
        curWinHeight = window.innerHeight;

    let positionx = curWinWidth / 2,
        positiony = curWinHeight / 2;

    let oC = document.querySelector(selector);
    oC.setAttribute('width', curWinWidth);
    oC.setAttribute('height', curWinHeight);
    let width = oC.width,
        height = oC.height,
        oGc = oC.getContext('2d');

    function randomPositon(r, blank) { //在半径blank至r之间的圆环中随机生成粒子
        let rer = r;
        r = Math.random() * rer;
        while (r <= blank) {
            r = Math.random() * rer;
        }
        let arcer = Math.random() * 360 * 0.017453293;
        return [r * Math.sin(arcer) + positionx, r * Math.cos(arcer) + positiony, r * Math.sin(arcer), r * Math.cos(arcer)];
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let Atom = function () {};
    Atom.prototype = {
        init: function () {
            this.counter = 0;
            [this.x, this.y, this.movex, this.movey] = randomPositon(1000, 10);
            this.r = random(1, 5);
            this.v = random(speedl, speedu);
        },
        draw: function (cxt) {
            cxt.beginPath();
            cxt.fillStyle = `rgb(${color.three})`;
            cxt.arc(this.x, this.y + this.r, this.r, 0, Math.PI * 2, false);
            cxt.fill();
            cxt.closePath();
            this.update(cxt);
        },
        update: function (cxt) {
            if (this.y >= 0 && this.y <= height && this.x >= 0 && this.x <= width) {
                this.y += this.movey * this.v;
                this.x += this.movex * this.v;
            } else {
                this.init();
            }
        }
    }
    let atom = [];
    createAtom(60);
    let ani;
    function move() {
        oGc.clearRect(0, 0, width, height);
        for (let i = 0; i < atom.length; i++) {
            atom[i].draw(oGc);
        }
        ani =  requestAnimationFrame(move);
    }
    move();
    
    function createAtom(number) {
        atom.length = 0;
        for (let i = 0; i < number; i++) {
                let oAtom = new Atom();
                oAtom.init();
                atom.push(oAtom);
        }
    }

}

export default ahead;

