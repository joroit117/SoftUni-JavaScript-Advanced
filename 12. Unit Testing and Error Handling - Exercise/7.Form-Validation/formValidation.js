function validate() {
    let submitElement = document.getElementById('submit');

    let checkboxElement = document.getElementById('company');
    checkboxElement.addEventListener('change', (e) => {
        let companyInfoElement = document.getElementById('companyInfo');
        if(e.target.checked){
            companyInfoElement.style.display = 'block';
        }
        else{
            companyInfoElement.style.display = 'none';
        }
    });

    submitElement.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;

        let usernameElement = document.getElementById('username');
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        if(usernamePattern.exec(usernameElement.value) === null){
            usernameElement.style.borderColor = 'red';
            isValid = false;
        }

        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');
        let passwordPattern = /^[A-Za-z0-9_]{5,15}$/;
        if(passwordPattern.exec(passwordElement.value) === null 
        || passwordPattern.exec(confirmPasswordElement.value) === null 
        || passwordElement.value != confirmPasswordElement.value){
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
            isValid = false;
        }

        let emailElement = document.getElementById('email');
        let emailPattern = /[a-z]*@[a-z]*\.[a-z]*/;
        if(emailPattern.exec(emailElement.value) === null){
            emailElement.style.borderColor = 'red';
            isValid = false;
        }

        if(checkboxElement.checked){
            let companyNumber = document.getElementById('companyNumber');
            if(companyNumber.value < 1000 || companyNumber.value > 9999){
                companyNumber.style.borderColor = 'red';
                isValid = false;
            }
        }

        let validElement = document.getElementById('valid');
        if(isValid){
            validElement.style.display = 'block';
        }else{
            validElement.style.display = 'none';
        }
    });
}
