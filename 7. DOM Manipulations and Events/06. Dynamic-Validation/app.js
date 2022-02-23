function validate() {
    let inputElement = document.getElementById('email');
    let regexValidator = new RegExp(/[a-z]*\@[a-z]*\.[a-z]+/gm);

    inputElement.addEventListener('input', (e) => {
        if(e.target.value.match(regexValidator)){
            e.target.classList.add('error');

        }else{
            e.target.classList.remove('error');
        }
    });
}