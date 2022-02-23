function solve() {
   let buttonAddElements = document.getElementsByClassName('add-product');
   let buttonAddArray = Array.from(buttonAddElements);

   let resultElement = document.querySelector('textarea');

   let checkoutButtonElement = document.getElementsByClassName('checkout');
   let totalSum = 0;

   let listOfBoughtProducts = [];

   buttonAddArray.forEach((element) => {
      element.addEventListener('click', (e) => {
         let mainDiv = e.target.parentNode.parentNode;
         let price = Array.from(mainDiv.getElementsByClassName('product-line-price'));
         let name = Array.from(mainDiv.getElementsByClassName('product-title'));
         
         if(!listOfBoughtProducts.includes(name[0].textContent)){
            listOfBoughtProducts.push(name[0].textContent);
         }
         totalSum += Number(price[0].textContent);

         resultElement.textContent += (`Added ${name[0].textContent} for ${Number(price[0].textContent).toFixed(2)} to the cart.\n`);
      });
   });

   checkoutButtonElement[0].addEventListener('click', (e) => {
      resultElement.textContent += `You bought ${listOfBoughtProducts} for ${totalSum.toFixed(2)}.`
   });
}