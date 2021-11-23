






































let arrayAllQuizzes;
let ulAllQuizzes;

let promiseAllQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promiseAllQuizzes.then(loadAllQuizzes);


function loadAllQuizzes(allQuizzes) {
    arrayAllQuizzes = allQuizzes.data;
    ulAllQuizzes = document.querySelector(".all-quizzes-container .all-quizzes");
    ulAllQuizzes.innerHTML = "";

    for (let i = 0; i < arrayAllQuizzes.length; i++) {
        buildingQuizzes(arrayAllQuizzes[i]);
    }
}

function buildingQuizzes(value) {

    ulAllQuizzes.innerHTML += `<li class="quizz-box" onclick="selectPublicQuizz(${value.id})"
    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),url(${value.image});background-repeat: no-repeat;background-size: cover;">
    <h3>${value.title}</h3>
</li>`;
}

function selectPublicQuizz(a) {
    
    document.styleSheets[1].deleteRule(4)
    document.styleSheets[1].insertRule(`.first-page {
      display: none;
      flex-direction: column;
      align-items: center;
    
      gap: 60px 0px;
    }`,5)
    
   
      
        let imgQuiz = document.querySelector(".second-page")
    console.log(arrayAllQuizzes)

            let getIDQuiz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${a}`)
            getIDQuiz.then((id)=>{
               
               
                imgQuiz.innerHTML = `<div class="question-quiz"><div class="img-quiz" /></div>
                <h1>${id.data.title}</h1>
              `
              
              let randomNumber;
              let tmp;
              let rdnAnswers = [];
              for (let i = 0; i < 4; i++) {
                rdnAnswers[i] = i ;
             }
              console.log(rdnAnswers)
          for(let i = rdnAnswers.length;i;){
            
            
                randomNumber = Math.random() * i-- | 0;
                tmp = rdnAnswers[randomNumber];
                // troca o número aleatório pelo atual
                rdnAnswers[randomNumber] = rdnAnswers[i];
                // troca o atual pelo aleatório
                rdnAnswers[i] = tmp;
              
          }
          console.log(rdnAnswers)
              for(let i=0;i<id.data.questions.length;i++){
                console.log(rdnAnswers[i])
                console.log(id.data.questions[i].answers[rdnAnswers[i]])
                
                imgQuiz.innerHTML +=`<div class="questions" >
                <div class="anwsers-title">${id.data.questions[i].title}</div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[rdnAnswers[0]].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[rdnAnswers[0]].image}" />
                  <span>${id.data.questions[i].answers[rdnAnswers[0]].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[rdnAnswers[1]].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[rdnAnswers[1]].image}" />
                  <span>${id.data.questions[i].answers[rdnAnswers[1]].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[rdnAnswers[2]].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[rdnAnswers[2]].image}" />
                  <span>${id.data.questions[i].answers[rdnAnswers[2]].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[rdnAnswers[3]].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[rdnAnswers[3]].image}" />
                  <span ">${id.data.questions[i].answers[rdnAnswers[3]].text}</span>
                </div>`
                
              }
                let b = 
                `.img-quiz
                { width: 100%;
                height: 400px;background: linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57));
                background-image:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url("${id.data.image}");
                background-repeat: no-repeat;
                background-size: cover;
                }`
            
            })   
}

function incorrectAnwsers(anwser,div){
  
  
 console.log(div.parentNode.children.length)
 console.log(div.parentNode.children[1])
 
    console.log(div.classList)
    for(let i = 0 ; i<div.classList.length;i++)
    {if(div.classList[i] == "color-text-wrong-answer" || div.classList[i] == "text-wrong-answer" || div.classList[i] == "color-text-right-answer"){
      return
    }
  }
    for(let i = 1; i<div.parentNode.children.length;i++){
     if(div.attributes[1].specified!==anwser){ 
      div.parentNode.children[i].classList.add("color-text-wrong-answer") 
      if(div !== div.parentNode.children[i])
      {
        div.parentNode.children[i].classList.add("text-wrong-answer")
        
     }
    }
    else{
       
  div.classList.add("color-text-right-answer")
  if(div !== div.parentNode.children[i])
      {
        div.parentNode.children[i].classList.add("text-wrong-answer")
        div.parentNode.children[i].classList.add("color-text-wrong-answer") 
      
     }
    }
    }
  
   setInterval((div.parentNode.nextSibling.scrollIntoView({block: "end"})),2000) 
  
}