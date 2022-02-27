function attachEventsListeners() {
    let inputElement = document.getElementById('inputDistance');
    let outputElement = document.getElementById('outputDistance');
    let buttonElement = document.getElementById('convert');
    
    function convert(){
        let units = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }
        let selectElement = document.getElementById('inputUnits');
        let meters = units[selectElement.value] * inputElement.value;
        console.log(meters);
        return {
            km: meters / units['km'],
            m: meters, 
            cm: meters / units['cm'],
            mm: meters / units['mm'],
            mi: meters / units['mi'],
            yrd: meters / units['yrd'],
            ft: meters / units['ft'],
            in: meters / units['in']
        };
        
    }

    buttonElement.addEventListener('click', (e) => {
        let result = convert();
        let selectElement = document.getElementById('outputUnits');
        outputElement.value = result[selectElement.value].toFixed(4);
    });
}