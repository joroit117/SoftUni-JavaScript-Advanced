function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('button')).forEach(element => {
        element.addEventListener('click', (e) => {
            let text = e.target.parentElement.parentElement.querySelectorAll('textarea');

            if(e.target.textContent === 'Encode and send it'){
                let asciiText = '';
                for(let i = 0; i < text[0].value.length; i++){
                    let asciiSymbol = text[0].value.charCodeAt(i) + 1;
                    asciiText += String.fromCharCode(asciiSymbol);
                }

                text[1].value = asciiText;
                text[0].value = '';
            }else{
                let regularText = '';
                for(let i = 0; i < text[1].value.length; i++){
                    let asciiSymbol = text[1].value.charCodeAt(i) - 1;
                    regularText += String.fromCharCode(asciiSymbol);
                }
                text[1].value = regularText;
            }
        });
    });
}