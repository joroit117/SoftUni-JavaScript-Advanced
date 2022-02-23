function focused() {
    /*let textElements = document.querySelectorAll('input[type="text"]');/*.forEach(item => {
        item.addEventListener('input', function () {
            if(item.value.length > 0){
                item.parentNode.classList.add('focused');
            }else{
                item.parentNode.classList.remove('focused');
            }

            item.target.parentElement.classList.add('focused');
        });        
    });
    textElements.forEach(item => {
        item.addEventListener('focus', function () {
            item.parentNode.classList.add('focused');
        });
    });
    textElements.forEach(item => {
        item.addEventListener('blur', function () {
            item.parentNode.classList.remove('focused');
        });
    });*/
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus",focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur",focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
       parent.classList.add("focused");
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    }
}