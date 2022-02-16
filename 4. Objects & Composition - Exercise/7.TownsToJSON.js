function solve(infoArray){
    let output = [];
    for (let i = 0; i < infoArray.length; i++) {
        let townKey = '', latitudeKey = '', longitudeKey = '';
        if(i > 0){
            let [townValue, latitudeValue, longitudeValue] = infoArray[i].split(new RegExp(/\s*\|\s*/)).filter(Boolean);
            latitudeValue = Number(latitudeValue);
            longitudeValue = Number(longitudeValue);
            output.push({Town: townValue, Latitude: +latitudeValue.toFixed(2), Longitude: +longitudeValue.toFixed(2)});
        }
    }
    output = JSON.stringify(output);
    return output;
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);