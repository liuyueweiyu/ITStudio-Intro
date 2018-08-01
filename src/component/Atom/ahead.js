function ahead(selector) {

    let color = '#fff',
        speedl = 0.05,
        speedu = 0.08,
        f = false;

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
            // this.f = f;
        },
        draw: function (cxt) {
            cxt.beginPath();
            cxt.fillStyle = color;
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
                if(f)
                    this.init();
            }
        }
    }

    let atom = [];
    // const atomCount = 40;
    createAtom(500);
    let ani;
    function move() {
        oGc.clearRect(0, 0, width, height);
        for (let i = 0; i < atom.length; i++) {
            atom[i].draw(oGc);
        }
        ani =  requestAnimationFrame(move);
    }
    move();
    setTimeout(() => {
        window.cancelAnimationFrame(ani);
        oGc.clearRect(0, 0, width, height);
        setTimeout(() => {
            speedl = 0.03;
            speedu = 0.05;
            f = true;
            createAtom(40);
            move();

        }, 300);
    }, 1500);


    function createAtom(number) {
        atom.length = 0;
        for (let i = 0; i < number; i++) {
            // setTimeout(function () {
                let oAtom = new Atom();
                oAtom.init();
                atom.push(oAtom);
            // }, 10 * i);
        }
    }

}

export default ahead;

/*
**
*/