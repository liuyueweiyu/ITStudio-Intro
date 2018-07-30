function carmove(selector) {
    let atom = [[], [], [], []];
    let Speed = [20,20,20,20];
    let opa = 1;
    let seed = 0;
    const atomCount = 60;

    let curWinWidth = window.innerWidth,
        curWinHeight = window.innerHeight;

    let oC = document.querySelector(selector);
    oC.setAttribute('width', curWinWidth);
    oC.setAttribute('height', curWinHeight);

    let width = oC.width,
        height = oC.height,
        oGc = oC.getContext('2d');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let Atom = function () { };
    Atom.prototype = {
        init: function (q) {
            this.w = random(60, 220);
            this.x = - this.w;
            this.q = q;
            this.y = curWinHeight/2 - 70 + q * 40;
            this.space = random(30, 90);
            this.fill = Math.random() > 0.45;
            this.interst = Math.random() > 0.85;
        },
        draw: function (cxt) {
            let index = atom[this.q].indexOf(this);
            const tj = index == 0 || atom[this.q][index - 1].x > this.space;
            if (tj) {
                cxt.beginPath();
                if(this.interst){
                    cxt.fillStyle = `rgba(153,204,255,${opa.toString()})`;
                    cxt.strokeStyle = `rgba(153,204,255,${opa.toString()})`;
                    this.fill  = true;
                }
                else{
                    cxt.fillStyle = `rgba(255,255,255,1)`;
                    cxt.strokeStyle = `rgba(255,255,255,1)`;
                }
                
                cxt.rect(this.x, this.y, this.w, 20);
                cxt.stroke();
                if (this.fill)
                    cxt.fill();
                this.update(cxt);
            }
        },
        update: function (cxt) {
            if(this.x + this.w > curWinWidth){
                Speed[0] = 1.2, Speed[1] = 1.8, Speed[2] = 1.5, Speed[3] = 1.1;
            }
                
            if (this.x < width) {
                this.x += Speed[this.q];
            }
            else {
                atom[this.q].splice(0, 1);
                this.init(this.q);
            }

        }
    }
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < atomCount; i++) {
            let oAtom = new Atom();
            oAtom.init(j);
            atom[j].push(oAtom);
        }
    }
    let ani;
    function move() {
        opa -= seed;
        oGc.clearRect(0, 0, width, height);
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < atom[j].length; i++) {
                atom[j][i].draw(oGc);
            }
        }
        ani = requestAnimationFrame(move);

    };
    move();
    setTimeout(() => {  //设置褪色
        seed = 0.005;
        console.log(seed);
    }, 9800);
}

export default carmove;