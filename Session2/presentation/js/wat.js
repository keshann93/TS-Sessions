setTimeout(() => {

    var fnList = [
        '[]+1',
        '[]-1',
        '[]+[]',
        '[]-[]',
        '[]+{}',
        '[]-{}',
        '{}+{}',
        '{}-{}',
        '{}-1',
        'typeof ([]-[]) === typeof ({}-{})',
        '!isNaN(1)',
        '!isNaN("a")',
        '!isNaN(NaN)',
        'typeof NaN',
        '1 * "foo"',
        '1 + "foo"',
        '~Math.PI',
        '~~Math.PI',
        'typeof {}',
        'typeof null === typeof {}',
        'typeof undefined',
        '1 + 1 === 1 + 1',
        '{} + [] === {} + []',
        'Array(5).join("Cool")',
        'Array(5).join("Cool"+1)',
        '`BA${Array(2).join("Cool"-1)}A`',
        '+!+[] + !+[]+!+[]'
    ],
        idx = 0,
        btn = document.getElementById('wat-button'),
        text = document.getElementById('wat-text'),
        result = document.getElementById('wat-result');

    text.innerText = fnList[idx];

    const zoom = () => {
        let inc = step = Math.PI/10;
        let baseline = 0.55;
        const baseColor = result.style.color;
        btn.setAttribute('disabled', 'disabled');
        result.style.color = "red";
        const iterate = () => {
            const factor = 0.55 * (Math.sin(inc) * 1 + 1);
            result.style.fontSize = `${factor}em`;
            inc += step;
            if (inc < Math.PI) {
                setTimeout(iterate, 100);      
            }
            else {
                result.style.fontSize = `${baseline}em`;
                result.style.color = baseColor;
                if (idx < fnList.length) {
                    btn.removeAttribute('disabled');
                }
                else {
                    btn.setAttribute('visibility', 'none');
                }
            }
        };
        setTimeout(iterate, 100);
    }

    btn.addEventListener("click", () => {
        result.innerText = `${fnList[idx]} : ${eval(fnList[idx])}`;
        zoom();
        idx++;
        if (idx !== fnList.length) {
            text.innerText = fnList[idx];
        }
    });

}, 0);