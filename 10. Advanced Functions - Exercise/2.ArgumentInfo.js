function solve(){
    let containerCounts = {};
    for (const argument of arguments) {
        let type  = typeof(argument);
        if(containerCounts.hasOwnProperty(type)){
            containerCounts[type]++;
        }else{
            containerCounts[type] = 1;
        }
        console.log(`${type}: ${argument}`);
    }
    
    Object.keys(containerCounts)
    .sort((a,b) => containerCounts[b] - containerCounts[a])
    .forEach(x => console.log(`${x} = ${containerCounts[x]}`));

}
solve('cat', 42, function () { console.log('Hello world!');});