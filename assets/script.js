let hideFirstPage = document.querySelector(".first-page");
let hideFirstStep;
let showSecondStep;
let showThirdStep;

let questionTitles;
let questionColors;
let trueAnswersText;
let trueAnswersImg;
let falseAnswersText0;
let falseAnswersImg0;
let falseAnswersText1;
let falseAnswersImg1;
let falseAnswersText2;
let falseAnswersImg2;

let levelTitle;
let levelPercentage;
let levelImg;
let levelText;

let inputsFirstStep;
let quizzFeatures = {
  title: "",
  image: "",
  questions: [],
  levels: []
};
let questionsToCreate = 0;
let levelsToCreate = 0;






let arrayAllQuizzes;
let ulAllQuizzes;
let idQuizzesGlobal = 0;



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
    idQuizzesGlobal = a
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
               console.log(id.data.levels[0].text)
               
                imgQuiz.innerHTML = `<div class="question-quiz"><div class="img-quiz" /></div>
                <h1>${id.data.title}</h1>
              `
              console.log(id.data.levels)
              let randomNumber;
              let tmp;
              let rdnAnswers = [];
              for (let i = 0; i < 4; i++) {
                rdnAnswers[i] = i ;
             }
              
          for(let i = rdnAnswers.length;i;){
            
            
                randomNumber = Math.random() * i-- | 0;
                tmp = rdnAnswers[randomNumber];
                // troca o número aleatório pelo atual
                rdnAnswers[randomNumber] = rdnAnswers[i];
                // troca o atual pelo aleatório
                rdnAnswers[i] = tmp;
              
          }
          
              for(let i=0;i<id.data.questions.length;i++){
               
                
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
                </div>
                `
                
                
              }
              console.log(document.querySelector(".questions").parentNode.lastChild.innerHTML =
               `<div class="anwsers-title">${id.data.levels[0].text}</div>
               <div class="anwsers-result">
                  <img src="${id.data.levels[0].image}" />
                  <span ">${id.data.levels[0].text}</span>
                </div>
                <div class="buttons-home-again">
                <button id="again" >Reiniciar Quiz</button>
                <button id="home" refreshPage()>Voltar Home</button></div>` )
              console.log(id.data.levels[0].text)
              
                let b = 
                `.img-quiz
                { width: 100%;
                height: 400px;background: linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57));
                background-image:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url("${id.data.image}");
                background-repeat: no-repeat;
                background-size: cover;
                }`
                console.log(id.data.levels)
            
              
              
            
               
            })   
}
let arrayOFAnsewrs = []
let olnyAnsewrs
let olnyAnsewrsTrue =0
function incorrectAnwsers(anwser,div){
  let count = 0
  let ans= document.querySelectorAll(".anwsers")
  let endQuiz = document.querySelector(".second-page")
 
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
   
    
    for(let i = 0; i<ans.length;i++)
    {
      if(ans[i] === div ){
         arrayOFAnsewrs[i] = div.attributes[1].value
      }
      
    }
    
     for(let i =0;i< arrayOFAnsewrs.length;i++){
      
       olnyAnsewrs =  arrayOFAnsewrs.filter(()=>{ return arrayOFAnsewrs[i] !== "" || arrayOFAnsewrs[i] !== null})
      
    } 
    
    
    
   setInterval((div.parentNode.nextSibling.scrollIntoView({block: "end",behavior: "smooth"})),2000) 
    console.log(100/olnyAnsewrs.length)
    
    if(olnyAnsewrs.length>= 3){
        
      for(let i = 0;i<olnyAnsewrs.length;i++){
if(olnyAnsewrs[i] ==="incorrectAnwsers(true,this)"){
    
    a +=1 

}

      }
      olnyAnsewrsTrue * (100/olnyAnsewrs.length)
      
    }
}

function thirdPageOn() {
  inputsFirstStep = document.querySelectorAll(".third-page .first-step .inputs-first-step input");
  for (let i = 0; i < inputsFirstStep.length; i++) {
    inputsFirstStep[i].value = ""
  }

  hideFirstPage.classList.add("hidden");

  let showThirdPage = document.querySelector(".third-page");
  showThirdPage.classList.remove("hidden");
}

function firstStepCreating() {

  let validInputs = 0;

  if (inputsFirstStep[0].value.length <= 20 || inputsFirstStep[0].value.length >= 65) {
    alert("Por favor preencha o título corretamente.(Mínimo 20 caracteres e máximo 65)");
  } else {
    quizzFeatures.title = inputsFirstStep[0].value;
    validInputs++;
  }

  if (inputsFirstStep[1].value.includes("https://")) {
    quizzFeatures.image = inputsFirstStep[1].value;
    validInputs++;
  } else {
    alert("Por favor insira a URL de uma imagem.");
  }

  if (inputsFirstStep[2].value < 3) {
    alert("Por favor insira no mínimo 3 perguntas.");
  } else {
    for (let i = 0; i < inputsFirstStep[2].value; i++) {
      quizzFeatures.questions.push({
        title: "",
        color: "",
        answers: []
      })
    };
    questionsToCreate = Number(inputsFirstStep[2].value)
    validInputs++;
  }

  if (inputsFirstStep[3].value < 2) {
    alert("Por favor insira no mínimo 2 níveis");
  } else {
    for (let i = 0; i < inputsFirstStep[3].value; i++) {
      quizzFeatures.levels.push({
        title: "",
        image: "",
        text: "",
        minValue: ""
      });
      levelsToCreate = Number(inputsFirstStep[3].value)
    }
    validInputs++;
  }
  console.log(validInputs)
  hideFirstStep = document.querySelector(".third-page .first-step")

  if (validInputs === 4) {
    validInputs = 0;
    hideFirstStep.classList.add("hidden");

    showSecondStep = document.querySelector(".third-page .second-step");
    showSecondStep.classList.remove("hidden");

    let addQuestion = document.querySelector(".creating-questions");
    for (let i = 0; i < questionsToCreate; i++) {
      addQuestion.innerHTML += `
      <div class="inputs-box-style creating-question">
      <h2>Pergunta ${i + 1}</h2>
      <input type="text" class="creating-question-title" placeholder="Texto da pergunta">
      <input type="text" class="creating-question-color" placeholder="Cor de fundo da pergunta">
      <h2>Resposta correta</h2>
      <input type="text" class="creating-trueanswer-text" placeholder="Resposta correta">
      <input type="text" class="creating-trueanswer-img" placeholder="URL da imagem">
      <h2>Respostas Incorretas</h2>
      <input type="text" class="creating-falseanswer-text0" placeholder="Resposta incorreta 1">
      <input type="text" class="creating-falseanswer-img0" placeholder="URL da imagem 1">
      <input type="text" class="creating-falseanswer-text1" placeholder="Resposta incorreta 2">
      <input type="text" class="creating-falseanswer-img1" placeholder="URL da imagem 2">
      <input type="text" class="creating-falseanswer-text2" placeholder="Resposta incorreta 3">
      <input type="text" class="creating-falseanswer-img2" placeholder="URL da imagem 3">
      </div>`
    }
  }

}

function secondStepCreating() {

  let validQuizz = true;

  questionTitles = document.querySelectorAll(".creating-question .creating-question-title");
  questionColors = document.querySelectorAll(".creating-question .creating-question-color");
  trueAnswersText = document.querySelectorAll(".creating-question .creating-trueanswer-text");
  trueAnswersImg = document.querySelectorAll(".creating-question .creating-trueanswer-img");
  falseAnswersText0 = document.querySelectorAll(".creating-question .creating-falseanswer-text0");
  falseAnswersImg0 = document.querySelectorAll(".creating-question .creating-falseanswer-img0");
  falseAnswersText1 = document.querySelectorAll(".creating-question .creating-falseanswer-text1");
  falseAnswersImg1 = document.querySelectorAll(".creating-question .creating-falseanswer-img1");
  falseAnswersText2 = document.querySelectorAll(".creating-question .creating-falseanswer-text2");
  falseAnswersImg2 = document.querySelectorAll(".creating-question .creating-falseanswer-img2");

  function colorVerification(stringColor) {

    for (let i = 1; i < 6; i++) {
      switch (stringColor[i]) {
        case "a":
          break;
        case "A":
          break;
        case "b":
          break;
        case "B":
          break;
        case "c":
          break;
        case "C":
          break;
        case "d":
          break;
        case "D":
          break;
        case "e":
          break;
        case "E":
          break;
        case "f":
          break;
        case "F":
          break;
        case "0":
          break;
        case "1":
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          break;
        case "5":
          break;
        case "6":
          break;
        case "7":
          break;
        case "8":
          break;
        case "9":
          break;
        default:
          return false
      }
    }
    return true
  }

  for (let i = 0; i < questionTitles.length; i++) {

    if (questionTitles[i].value.length >= 20) {
      quizzFeatures.questions[i].title = questionTitles[i].value;
    } else {
      alert(`O título das perguntas deve ter no mínimo 20 caracteres. Erro na pergunta ${i + 1}`)
      validQuizz = false;
    }
  }

  for (let i = 0; i < questionColors.length; i++) {
    if (questionColors[i].value.length === 7 && colorVerification(questionColors[i].value) && questionColors[i].value[0] === "#") {
      quizzFeatures.questions[i].color = questionColors[i].value;

    } else {
      alert(`A cor da pergunta ${i + 1} deve ser inserida em hexadecimal.`);
      validQuizz = false;
    }
  }

  for (let i = 0; i < trueAnswersText.length; i++) {
    if (trueAnswersText[i].value !== "") {
      quizzFeatures.questions[i].answers.push(
        {
          text: trueAnswersText[i].value,
          image: "",
          isCorrectAnswer: true
        }
      )
    } else {
      alert(`Preencha o texto da resposta correta da pergunta ${i}`)
      validQuizz = false;
    }
  }

  for (let i = 0; i < trueAnswersImg.length; i++) {

    if (trueAnswersImg[i].value.includes("https://")) {
      quizzFeatures.questions[i].answers[0].image = trueAnswersImg[i].value
    } else {
      alert(`A imagem da resposta correta na pergunta ${i} precisa ser uma URL.`);
      validQuizz = false;
    }
  }

  for (let i = 0; i < falseAnswersText0.length; i++) {
    if (falseAnswersText0[i].value !== "" && falseAnswersImg0[i].value.includes("https://")) {
      quizzFeatures.questions[i].answers.push(
        {
          text: falseAnswersText0[i].value,
          image: falseAnswersImg0[i].value,
          isCorrectAnswer: false
        }
      )
    } else {
      alert(`As imagens precisam ser uma URL e as respostas precisam existir`);
      validQuizz = false;
    }
  }

  for (let i = 0; i < falseAnswersText1.length; i++) {
    if (falseAnswersText1[i].value !== "" && falseAnswersImg1[i].value.includes("https://")) {
      quizzFeatures.questions[i].answers.push(
        {
          text: falseAnswersText1[i].value,
          image: falseAnswersImg1[i].value,
          isCorrectAnswer: false
        }
      )
    } else {
      alert(`As imagens precisam ser uma URL e as respostas precisam existir`);
      validQuizz = false;
    }
  }

  for (let i = 0; i < falseAnswersText2.length; i++) {
    if (falseAnswersText2[i].value !== "" && falseAnswersImg2[i].value.includes("https://")) {
      quizzFeatures.questions[i].answers.push(
        {
          text: falseAnswersText2[i].value,
          image: falseAnswersImg2[i].value,
          isCorrectAnswer: false
        }
      )
    } else {
      alert(`As imagens precisam ser uma URL e as respostas precisam existir`)
      validQuizz = false;
    }
  }

  for (let i = 0; i < questionsToCreate; i++) {
    quizzFeatures.questions[i].answers.length = 4
  }
  quizzFeatures.levels.length = levelsToCreate
  quizzFeatures.questions.length = questionsToCreate

  if (validQuizz) {

    let addLevels = document.querySelector(".third-page .third-step .creating-levels")
    for (let i = 0; i < levelsToCreate; i++) {
      addLevels.innerHTML += `
      <div class="inputs-box-style creating-level">
      <h2> Nível ${i + 1}</h2>
      <input type="text" class="creating-level-title" placeholder="Título do nível">
      <input type="text" class="creating-level-percentage" placeholder="% de acerto mínima">
      <input type="text" class="creating-level-img" placeholder="URL da imagem do nível">
      <textarea class="creating-level-text" placeholder="Descrição do nível"></textarea>
      </div>`
    }
    showSecondStep.classList.add("hidden");

    showThirdStep = document.querySelector(".third-page .third-step")
    showThirdStep.classList.remove("hidden")

  } else {
    validQuizz = true;
  }
}

function thirdStepCreating() {

  levelTitle = document.querySelectorAll(".creating-level .creating-level-title");
  levelPercentage = document.querySelectorAll(".creating-level .creating-level-percentage");
  levelImg = document.querySelectorAll(".creating-level .creating-level-img");
  levelText = document.querySelectorAll(".creating-level .creating-level-text");
  let arrayVerification = []

  for (let i = 0; i < levelsToCreate; i++) {
    arrayVerification.push(Number(levelPercentage[i].value))
  }

  for (let i = 0; i < levelsToCreate; i++) {

    if (levelTitle[i].value.length <= 10) {
      alert(`O título do nível ${i + 1} precisa ter no mínimo 10 caracteres`)
    } else {
      quizzFeatures.levels[i].title = levelTitle[i].value;
    }

    if (levelPercentage[i].value >= 0 && levelPercentage[i].value <= 100 && arrayVerification.includes(0)) {
      quizzFeatures.levels[i].minValue = Number(levelPercentage[i].value);
    } else {
      alert(`A porcentagem de acertos no nível ${i + 1} deve ser um número entre 0 e 100. É necessário existir pelo menos um valor igual a 0`);
    }

    if (levelImg[i].value.includes("https://")) {
      quizzFeatures.levels[i].image = levelImg[i].value
    } else {
      alert(`A imagem no nível ${i + 1} precisa ter formato URL`)
    }

    if (levelText[i].value.length >= 30) {
      quizzFeatures.levels[i].text = levelText[i].value
    } else {
      alert(`A descrição no nível ${i + 1} precisa ter no mínimo 30 caracteres`)
    }
  }

  let promiseCreateQuizz = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", quizzFeatures)

  promiseCreateQuizz.then(() => {

    let quizzPreview = document.querySelector(".success .user-quizz")
    let idQuizz;
    for (let i = 0; i < arrayAllQuizzes.length; i++) {
      if (arrayAllQuizzes[i].data.title === quizzFeatures.title) {
        idQuizz = arrayAllQuizzes[i].data.id;
      } else {

      }
    }

    quizzPreview.innerHTML = `<div class="quizz-box" onclick="selectPublicQuizz(${idQuizz})"
    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),url(${quizzFeatures.image});background-repeat: no-repeat;background-size: cover;">
    <h3>${quizzFeatures.title}</h3>
</div>`

    quizzFeatures = {
      title: "",
      image: "",
      questions: [],
      levels: []
    }

    showThirdStep.classList.add("hidden");
    let showSuccess = document.querySelector(".success");
    showSuccess.classList.remove("hidden")

  })
  promiseCreateQuizz.catch(() => { alert("Deu ruim!") })
  console.log(quizzFeatures)
}

function refreshPage() {
  window.location.reload()
}
