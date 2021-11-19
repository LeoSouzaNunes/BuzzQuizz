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
    let hideFirstPage = document.querySelector(".first-page")
    hideFirstPage.classList.add("hidden");

   
        
        let imgQuiz = document.querySelector(".second-page")
        let questionsQuiz = document.querySelector(".question-quiz");
    console.log(arrayAllQuizzes)

            let getIDQuiz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${a}`)
            getIDQuiz.then((id)=>{
               
                console.log(id.data.questions[0].answers[0].image)

               
                imgQuiz.innerHTML += `<div class="question-quiz"><div class="img-quiz" /></div>
                <h1>${id.data.title}</h1>
              </div><div class="questions">
              <div class="anwsers-title">${id.data.questions[0].title}</div>
              <div class="anwsers">
                <img src="${id.data.questions[0].answers[0].image}" />
                <span>${id.data.questions[0].answers[0].text}</span>
              </div>
              <div class="anwsers">
                <img src="${id.data.questions[0].answers[1].image}" />
                <span>${id.data.questions[0].answers[1].text}</span>
              </div>
              <div class="anwsers">
                <img src="${id.data.questions[0].answers[2].image}" />
                <span>${id.data.questions[0].answers[2].text}</span>
              </div>
              <div class="anwsers">
                <img src="${id.data.questions[0].answers[3].image}" />
                <span>${id.data.questions[0].answers[3].text}</span>
              </div>
            </div>`
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

