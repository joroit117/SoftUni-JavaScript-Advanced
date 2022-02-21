function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            if(!output.hasOwnProperty(restaurantName)){
               output[restaurantName] = {};
            }
            if(output.hasOwnProperty(restaurantName)){
               output[restaurantName][name] = Number(salary);
            } 
         }
      }
      let entries = Object.entries(output);
      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (const [name, salary] of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;
         if(avgSalary > currAvgSalary){
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }  
}
/*function solve() {

   let bestRestaurantObj = {
      highestAverageSalary : 0,
      bestSalary : 0,
      bestRestaurantName : '',
      bestRestaurantWorkers : []
   };

   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //HTML ELEMENTS
      let inputElement = JSON.parse(document.querySelector('#inputs textarea').value);
      let firstOutputElement = document.querySelector('#bestRestaurant p');
      let secondOutputElement = document.querySelector('#workers p');
      
      //PROGRAM LOGIC
      for (let i = 0; i < inputElement.length; i++) {
         let restaurantInfo = inputElement[i].split(' - ');

         let restaurantName = restaurantInfo[0];
         let workers = restaurantInfo[1].split(', ');

         for (let j = 0; j < i; j++) {
            let checkerInfo = inputElement[j].split(' - ');

            let checkerRestaurantName = checkerInfo[0];
            let checkerWorkers = checkerInfo[1].split(', ');

            if(checkerRestaurantName == restaurantName){
               for (const worker of workers) {
                  let workerInfo = worker.split(' ');
                  let workerName = workerInfo[0];
                  let workerSalary = workerInfo[1];
                  let exist = true;
                  for (const checkerWorker of checkerWorkers) {
                     let checkerWorkerInfo = worker.split(' ');
                     let checkerWorkerName = checkerWorkerInfo[0];
                     let checkerWorkerSalary = checkerWorkerInfo[1];
                     if(workerName != checkerWorkerName && workerSalary != checkerWorkerSalary){
                        exist = false;
                     }
                  }
                  if(!exist){
                     workers += checkerWorker;
                  }
               }
            }
         }
         bestRestaurant(workers, restaurantName);
      }

      //OUTPUT
      firstOutputElement.textContent = `Name: ${bestRestaurantObj.bestRestaurantName} Average Salary: ${bestRestaurantObj.highestAverageSalary.toFixed(2)} Best Salary: ${bestRestaurantObj.bestSalary.toFixed(2)}`;
      let secondOutput = '';
      for (const worker of bestRestaurantObj.bestRestaurantWorkers.sort((a, b) => b[1] - a[1])) {
         let workerInfo = worker.split(' ');
         let workerName = workerInfo[0];
         let workerSalary = Number(workerInfo[1]);
         secondOutput += ('Name: ' + workerName + ' With Salary: ' + workerSalary + ' ');
      }
      secondOutputElement.textContent = secondOutput;

   }

   function bestRestaurant(workers, restaurantName){
      let currentAverageSalary = 0;
      let currentBestSalary = 0;

      for (const worker of workers) {
         let workerInfo = worker.split(' ');

         let workerName = workerInfo[0];
         let salary = Number(workerInfo[1]);

         if(salary > currentBestSalary)currentBestSalary = salary;

         currentAverageSalary += salary;
      }

      currentAverageSalary /= (workers.length);

      if(currentAverageSalary > bestRestaurantObj.highestAverageSalary){
         bestRestaurantObj.highestAverageSalary = currentAverageSalary
         bestRestaurantObj.bestRestaurantName = restaurantName;
         bestRestaurantObj.bestRestaurantWorkers = workers;
         bestRestaurantObj.bestSalary = currentBestSalary;
      }

      return bestRestaurantObj;
}
}*/
