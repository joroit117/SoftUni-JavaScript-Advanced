function solve(car){
    let engines = {
        smallEngine : {
            power: 90,
            volume: 1800
        },
        normalEngine : {
            power: 120,
            volume: 2400
        },
        monsterEngine : {
            power: 200,
            volume: 3500
        }
    }
    let carriages = {
        hatchback : {
            type: 'hatchback', color: car.color
        },
        coupe : {
            type: 'coupe', color: car.color
        }
    }
    let wheels = [];

    if(car.power <= 90)car.engine = engines.smallEngine;
    else if(car.power > 90 && car.power <= 120)car.engine = engines.normalEngine;
    else if(car.power > 120)car.engine = engines.monsterEngine;

    if(car.carriage == 'hatchback')car.carriage = carriages.hatchback
    else car.carriage = carriages.coupe;

    if(car.wheelsize % 2 == 0)car.wheelsize--;
    for(let i = 0; i < 4; i++){
        wheels[i] = car.wheelsize;
    }
    car.wheels = wheels;
    
    delete car.power;
    delete car.color;
    delete car. wheelsize;

    return car;
}
solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });