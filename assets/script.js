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
    /* let hideFirstPage = document.querySelector(".first-page")
    hideFirstPage.classList.add("hidden"); */
    document.styleSheets[1].deleteRule(4)
    document.styleSheets[1].insertRule(`.first-page {
      display: none;
      flex-direction: column;
      align-items: center;
    
      gap: 60px 0px;
    }`,5)
    console.log(document.styleSheets[1])
   
        
        let imgQuiz = document.querySelector(".second-page")
    console.log(arrayAllQuizzes)

            let getIDQuiz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${a}`)
            getIDQuiz.then((id)=>{
               
                console.log(id.data.questions)

               
                imgQuiz.innerHTML = `<div class="question-quiz"><div class="img-quiz" /></div>
                <h1>${id.data.title}</h1>
              `
              
              for(let i=0;i<id.data.questions.length;i++){
                
                console.log(id.data.questions[i].answers.length)
                
                imgQuiz.innerHTML +=`<div class="questions" >
                <div class="anwsers-title">${id.data.questions[i].title}</div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[0].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[0].image}" />
                  <span>${id.data.questions[i].answers[0].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[1].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[1].image}" />
                  <span>${id.data.questions[i].answers[1].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[2].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[2].image}" />
                  <span>${id.data.questions[i].answers[2].text}</span>
                </div>
                <div class="anwsers" onclick="incorrectAnwsers(${id.data.questions[i].answers[3].isCorrectAnswer},this)">
                  <img src="${id.data.questions[i].answers[3].image}" />
                  <span ">${id.data.questions[i].answers[3].text}</span>
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
            console.log(document.styleSheets[1].insertRule(b))
            })   
}

function incorrectAnwsers(anwser,div){
  let count = 0;
  count += 1;
  if(count >= 2){
    return
  }
 console.log(div.parentNode.children[1].attributes[1])
 
 if(div.attributes[1].specified!==anwser){
    
    
    
  div.classList.remove("text-wrong-answer")  
  div.classList.add("text-wrong-answer")
  div.classList.add("color-text-wrong-answer")
  console.log(div.attributes[1])
}
else {
  div.classList.add("text-wrong-answer")
  div.classList.add("color-text-wrong-answer")
  div.classList.remove("text-wrong-answer") 
  div.classList.add("color-text-right-answer")
}

console.log(div.parentNode.children)
  
}
 /* for(let i = 1;i<div.parentNode.childElementCount;i++)
  {
    if(div.parentNode.children[i].attributes[1].specified!==anwser){
    
    
    
    div.classList.remove("text-wrong-answer")  
    div.parentNode.children[i].classList.add("text-wrong-answer")
    div.parentNode.children[i].classList.add("color-text-wrong-answer")
    console.log(div.parentNode.children[i].attributes[1])
  }
  else {
    div.parentNode.children[i].classList.add("text-wrong-answer")
    div.parentNode.children[i].classList.add("color-text-wrong-answer")
    div.classList.remove("text-wrong-answer") 
    div.classList.add("color-text-right-answer")
  }
} */