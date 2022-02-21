function search() {
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchTextElement = document.getElementById('searchText').value;
   for (let i = 0; i < townsElements.length; i++) {
      let isMatch = true;
      for(let j = 0; j < searchTextElement.length; j++){
         if(townsElements[i].textContent[j] != searchTextElement[j]){
            isMatch = false;
            break;
         }
      }
      if(isMatch == true){
         townsElements[i].style.textDecoration = 'underline';
         townsElements[i].style.fontWeight = 'bold';
      }
   }
}
