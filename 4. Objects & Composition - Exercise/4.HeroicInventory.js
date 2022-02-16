function solve(heroesArray){
    let output = [];
    for (hero of heroesArray) {
        hero = hero.split(' / ');
        let heroName = hero[0];
        let heroLevel = Number(hero[1]);
        let items = hero[2] ? hero[2].split(', ') : [];
        let heroObject = {
            name: heroName,
            level: heroLevel,
            items: items
        }
        output.push(heroObject);
    }
    let output1 = JSON.stringify(output);
    console.log(output1);
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);