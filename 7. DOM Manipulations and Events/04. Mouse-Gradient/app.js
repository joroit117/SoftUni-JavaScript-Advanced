function attachGradientEvents() {
    let gradietElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');

    const gradientMouseoverHandler = (e) => {
        let percentage = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        resultElement.textContent = `${percentage}%`;
    };

    gradietElement.addEventListener('mousemove', gradientMouseoverHandler);

}