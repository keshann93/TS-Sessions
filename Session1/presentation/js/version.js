setTimeout(function () {
    var versions = ['🥇', '🥈', '🥉'];
    var versionSpan = document.getElementById("versionSpan");
    var x = 0;
    setInterval(function () {
        x = (x + 1 ) % versions.length;
        versionSpan.innerText = versions[x];
    }, 500);
}, 0);