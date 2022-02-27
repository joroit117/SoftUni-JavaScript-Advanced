function create(words) {
   let containerElement = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.style.display = 'none';
      let text = document.createTextNode(word);

      paragraph.appendChild(text);
      div.appendChild(paragraph);
      containerElement.appendChild(div);

      div.addEventListener('click', (e) => {
         paragraph.style.display = 'inline';
      });
   }
}