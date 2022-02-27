function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach((item) => {
        item.addEventListener('click', (e) => {
            let radios = e.target.parentNode.querySelectorAll('input[type="radio"]');
            if(radios[1].checked){
            let info = Array.from(document.querySelectorAll('div'))
            .find(p => p.id.includes('HiddenFields'));
                if(e.target.textContent === 'Show more'){
                    e.target.textContent = 'Hide it';
                    info.style.display = 'block';
                }
                else{
                    e.target.textContent = 'Show more';
                    info.style.display = 'none';
                }
            }
        });
    });
    

}