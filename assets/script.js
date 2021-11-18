let arrayAllQuizzes;
let ulAllQuizzes;

function getAllQuizzes() {
    let promiseAllQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");

    promiseAllQuizzes.then(loadAllQuizzes);
}

function loadAllQuizzes(allQuizzes) {
    arrayAllQuizzes = allQuizzes.data;
    ulAllQuizzes = document.querySelector(".all-quizzes-container .all-quizzes");
    ulAllQuizzes.innerHTML = "";

    for (let i = 0; i < arrayAllQuizzes.length; i++) {
        buildingQuizzes(arrayAllQuizzes[i]);
    }
}

function buildingQuizzes(value) {

    ulAllQuizzes.innerHTML += `<li class="quizz-box" onclick="selectPublicQuizz()"
    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),url(${value.image});background-repeat: no-repeat;background-size: cover;">
    <h3>${value.title}</h3>
</li>`;
}

function selectPublicQuizz() {
    let hideFirstPage = document.querySelector(".first-page")
    hideFirstPage.classList.add("hidden")
}

getAllQuizzes();