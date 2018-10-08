setTimeout(function () {
    var h2 = document.getElementById("questions");
    var x = 0;
    setInterval(function () {
        if (h2.offsetParent != null) {
            x += 0.15;
            var offs = Math.sin(x) * 150;
            h2.style.marginLeft = `${offs}px`;
        }
    }, 50);
}, 0);