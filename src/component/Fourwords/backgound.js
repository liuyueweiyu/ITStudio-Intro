import color from "../Utils/variable.js";

function backgound(selector) {
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

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    let Atom = function () {};
    Atom.prototype = {
        init: function () {
            this.counter = 0;
            this.x = random(0,curWinWidth);
            this.sx = this.x;
            this.y = random(0,curWinHeight);
            this.sy = this.y;
            this.content = "";
            // this.opa = random(0,1);
            this.r = random(6, 120);
            this.v = random(0.10, 0.16);
            this.mx = random(-1,1);
            this.my = random(-1,1);
        },
        draw: function (cxt) {
            cxt.beginPath();
            if (this.content == ""){
                cxt.fillStyle = `rgba(${color.two},${(1- (this.r-6)/57)/2})`;
                cxt.arc(this.x + this.mx, this.y + this.my + this.r, this.r, 0, Math.PI * 2, false);
                cxt.fill();
                cxt.closePath();
                this.update(cxt);
            }
            else{
                cxt.fillStyle = `rgb(${color.three})`;
                cxt.arc(this.x + this.mx, this.y + this.my + this.r, this.r, 0, Math.PI * 2, false);
                cxt.fill();
                cxt.font = "normal 44px 微软雅黑";
                cxt.strokeStyle = `rgb(${color.three})`;
                cxt.fillStyle = `rgb(255,255,255)`;
                cxt.fillText(this.content, this.x + this.mx - 48, this.y + this.my + 85 ); //绘制文字
                cxt.stroke();
                cxt.closePath();
                this.update(cxt);
            }
        },
        update: function (cxt) {
            if (Math.abs(this.sx - this.x) < 10) {
                this.x += this.v * this.mx;
                this.y += this.v * this.my;
            }
            else {
                this.v = random(0.10, 0.16);
                this.mx = random(-1, 1);
                this.my = random(-1, 1);
                this.sx = this.x;
                this.sy = this.y;
            }
            
        }
    }

    let atom = [];
    const atomCount = 100;
    for (let i = 0; i < atomCount; i++) {
            let oAtom = new Atom();
            oAtom.init();
            atom.push(oAtom);
    }
    // const text = ["合作","热爱","提高","惊喜"];
    // const tx = [45,78,24,60];
    // const ty = [6,24,69,60];
    // for(let i = 0;i<text.length;i++)
    //     setTimeout(() => {
    //         pushAtom(text[i],tx[i]/100*curWinWidth,ty[i]/100*curWinHeight);
    //     },2000+2000*i);

    (function move() {
        oGc.clearRect(0, 0, width, height);
        for (let i = 0; i < atom.length; i++) {
            atom[i].draw(oGc);
        }
        requestAnimationFrame(move);
    })();

    function pushAtom(text,x,y) {
        let oAtom = new Atom();
        oAtom.init();
        oAtom.content = text;
        oAtom.x = x;
        oAtom.y = y;
        oAtom.r = 75;
        atom.push(oAtom);
        
    }
}


export default backgound;
