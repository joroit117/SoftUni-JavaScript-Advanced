function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchWord = document.getElementById('searchField');
   let rowElements = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {
      for (const row of rowElements) {
         row.className = '';
      }
      for (const row of rowElements) {
         if(searchWord.value !== '' && row.innerHTML.includes(searchWord.value)){
            row.className = 'select';
         }
      }
      searchWord.value = '';
   }
}