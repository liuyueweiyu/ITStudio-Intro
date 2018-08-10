import color from "../Utils/variable.js";

function ahead(selector) {
    let speed = 0.2,
        opa = 1,
        seed = 0.005,
        speed_s = 0.001;
        

    let positionx = 200,
        positiony = 150;

    let oC = document.querySelector(selector);
    oC.setAttribute('width', "400px");
    oC.setAttribute('height', "300px");
    let oGc = oC.getContext('2d');

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
            [this.x, this.y, this.movex, this.movey] = randomPositon(10, 3);
            this.r = random(3, 6);
        },
        draw: function (cxt) {
            cxt.beginPath();
            cxt.fillStyle = `rgba(${color.one},${opa})`;
            cxt.arc(this.x, this.y + this.r, this.r, 0, Math.PI * 2, false);
            cxt.fill();
            cxt.closePath();
            this.update(cxt);
        },
        update: function (cxt) {
            if (this.y >= 0 && this.y <= 300 && this.x >= 0 && this.x <= 400) {
                this.y += this.movey * speed;
                this.x += this.movex * speed;
            } else {
                // if(f)
                this.init();
            }
        }
    }
    let atom = [];
    createAtom(30);
    let ani;

    function move() {
        opa -= seed;
        if (speed_s >= 0)
            speed_s += 0.00001;
        if ( speed >= 0)
            speed = Math.max(speed - speed_s,0);
        oGc.clearRect(0, 0, 400, 300);
        for (let i = 0; i < atom.length; i++) {
            atom[i].draw(oGc);
        }
        ani = requestAnimationFrame(move);
    }
    move();

    setTimeout(() => {
        // seed = 0.005;
        speed = 0;
    }, 1000);

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
