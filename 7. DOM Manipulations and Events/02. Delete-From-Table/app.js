function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailTableElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailTableElements);
    let targetElement = emailElements.find(x => x.textContent == emailInputElement.value);
    
    //let targetRow = targetElement.parentNode.removeChild(targetElement);
    if(targetElement){
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    }else{
        resultElement.textContent = 'Not found.';
    }

}