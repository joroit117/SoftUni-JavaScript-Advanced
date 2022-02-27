function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    let buttonElements = document.querySelectorAll('input[type="button"]');
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', onConvert);
    }

    function convert(value, unit){
        let days = value / rations[unit];
        console.log(value);

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onConvert(event){
        let text = event.target.parentNode.querySelectorAll('input[type="text"]')[0];
        
        let time = convert(Number(text.value), text.id);
        
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds; 
    }
}