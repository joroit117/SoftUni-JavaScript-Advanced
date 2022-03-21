function validate() {
    let pattern = /[a-z]*@[a-z]*\.[a-z]*/;
    let emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (e) => {
        if(pattern.test(e.target.value)){
            e.target.removeAttribute('class');
            return;
        }
        e.target.className = 'error';
    });
}