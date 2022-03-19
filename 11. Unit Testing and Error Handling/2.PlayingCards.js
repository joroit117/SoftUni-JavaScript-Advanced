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
        toString(){
            console.log(cardFace + suits[cardSuit]);
        }
    }
}
let card = solve('A', 'S');
card.toString();