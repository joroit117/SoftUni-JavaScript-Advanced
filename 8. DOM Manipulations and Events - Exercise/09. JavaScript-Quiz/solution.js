function solve() {
  
  let questions = Array.from(document.querySelectorAll('ul[class="quiz-step step1 current"]'));
  let rightAnswers = 0;

  quizz(questions, rightAnswers);

  function quizz(questions, rightAnswers){
    for(let i = 0; i < questions.length; i++){
      Array.from(questions[i].querySelectorAll('p[class="answer-text"]')).forEach(item => {
        item.addEventListener('click', (e) => {
          console.log(e.target.textContent);
          if(e.target.textContent === 'onclick' || e.target.textContent === 'JSON.stringify()'
           || e.target.textContent === 'A programming API for HTML and XML documents'){
             rightAnswers++;
           }
           if(i != questions.length - 1){
            questions[i].parentElement.style.display = 'none';
            questions[i + 1].parentElement.style.display = 'block';
          }
          else{
            questions[i].parentElement.style.display = 'none';
            let result = document.getElementById('results');
            printResult(result, rightAnswers);
          }
        });
      });
    }
  }
  
  function printResult(result, rightAnswers){
    let output = result.querySelector('h1');
    if(rightAnswers == 3){
      output.textContent = 'You are recognized as top JavaScript fan!';
      result.style.display = 'block';
    }
    else{
      output.textContent = `You have ${rightAnswers} right answers`
      result.style.display = 'block';
    }
  }
}
