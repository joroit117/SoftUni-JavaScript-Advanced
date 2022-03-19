function printDeck(deck){
    let result = '';
    let error = false;
    deck.forEach(element => {
        let face = element.slice(0, element.length - 1);
        let suit = element.slice(element.length - 1, element.length);
        try{
            let card = solve(face, suit);
            result += card.face + card.suit + ' ';
        }catch(Error){
            error = true;
            console.log(`Invalid card: ${element}`);
        }
    });
    if(!error){
        console.log(result);
    }

    function solve(cardFace, cardSuit){

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
    
        if(!validFaces.includes(cardFace) || !suits[cardSuit]){
            throw Error('Error');
        }
    
        return {
            face: cardFace,
            suit: suits[cardSuit],
            toString(){
                console.log(cardFace + suits[cardSuit]);
            }
        }
    }
}
printDeck(['5S', '3D', 'QD', '1C']);