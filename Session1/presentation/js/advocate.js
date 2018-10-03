setTimeout(function () {
    var cvs = document.getElementById("bitcvs");
    var ctx = cvs.getContext('2d');
    var bit = new Image();
    bit.onload = function () {
        var x = 0;
        const step = Math.PI/60;
        setInterval(function () {
            const a = Math.abs;
            const s = Math.sin;
            const c = Math.cos;
            cvs.width|=0;
            ctx.drawImage(bit, 160-(a(160*s(x))), 175-(a(175*s(x))), a(320*s(x)), a(340*s(x)));
            x=(x+step)%(Math.PI*2);
        }, 100);
    };
    bit.src = "./images/DevAdvocate_Racoon.png";						
}, 0);