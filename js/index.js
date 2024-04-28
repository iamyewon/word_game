let WORD_COUNT = 50;
let isEndGame = true;
let wordList = [];
let correctWordList = [];
let incorrectWordList = [];
const LIMIT_TIME = 20;

const wordCount = document.querySelector('.word-count');
const word = document.querySelector('.word');
const wordBox = document.querySelector('.word-box');
const time = document.querySelector('.time');
const timerBox = document.querySelector('.timer');
const wordInput = document.querySelector('.word-input');
const wordTitle = document.querySelector('.word-title');
const correctWords = document.querySelector('.correct-words');
const correctCount = document.querySelector('.correct-count');
const incorrectWords = document.querySelector('.incorrect-words');
const incorrectCount = document.querySelector('.incorrect-count');
const resetButton = document.querySelector('.reset-button');
const loadingBackground = document.querySelector('.loading-background');
const loader = document.querySelector('.loader');


resetButton.value = setBtnValue();
wordInput.addEventListener('keyup', (e) => handleInputWord(e));


function fetchData(){
    displayLoading();
    axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        wordList = response.data;
        wordCount.textContent = WORD_COUNT;
        word.textContent = wordList[0];
        handleTimer();
        hideLoading();
    }).catch(console.error);
}

let timer;
function handleTimer(){
    let limitTime = LIMIT_TIME;
    time.textContent = `${limitTime}초`
    timer = setInterval(() => {
        if(limitTime <= 0){
            clearInterval(timer);
            endGame();
        }
        if(limitTime > 0){
            limitTime -= 1;
            time.textContent = `${limitTime}초`
            if(0 < limitTime && limitTime <= 5){
                console.log(limitTime);
                timerBox.classList.add('imminent-time');
            }
        }
    }, 1000);
}


function endGame(){
    clearInterval(timer);
    timerBox.classList.remove('imminent-time');
    wordTitle.textContent = "";
    word.textContent = "Game Over";
    time.textContent = `Time's Up!`;
    isEndGame = true;
    resetButton.value = setBtnValue();
    wordInput.value = "";
    wordList = [];
    wordInput.disabled = true;
    wordBox.classList.add('transparent');
}

function resetGame(){
    clearInterval(timer);
    timerBox.classList.remove('imminent-time');
    word.textContent = "Word Game";
    time.textContent = '';
    isEndGame = true;
    resetButton.value = setBtnValue();
    wordInput.value = "";
    wordList = [];
    wordInput.disabled = true;
    correctWords.textContent = '';
    correctWordList = [];
    incorrectWords.textContent = '';
    incorrectWordList = [];
    wordCount.textContent = '';
}

function startGame(){
    correctWords.textContent = '';
    correctWordList = [];
    incorrectWords.textContent = '';
    incorrectWordList = [];
    fetchData();
    wordTitle.textContent = "제시어";
    wordInput.disabled = false;
    correctCount.textContent = '';
    incorrectCount.textContent = '';
    isEndGame = false;
}



resetButton.addEventListener("click", () => {
    isEndGame ? startGame() : resetGame();
    resetButton.value = setBtnValue();
})


function handleCorrectWord(correctWord){
    wordList = wordList.filter((value) => value !== correctWord);
}


function handleInputWord(e){
    if(e.key === 'Enter'){
        if(word.textContent === wordInput.value.trim()){
            correctWordList.push(word.textContent);
            correctWords.textContent += `${word.textContent}  `;
            correctCount.textContent = `(${correctWordList.length})`;
            handleCorrectWord(word.textContent);
            word.textContent = wordList[0];
            wordCount.textContent -= 1;
        }else{
            incorrectWordList.push(word.textContent);
            incorrectWords.textContent += `${wordInput.value.trim()}  `;
            incorrectCount.textContent = `(${incorrectWordList.length})`;
        }
        wordInput.value = "";
    }
}



/* 게임 시작 & 리셋 버튼 */
function setBtnValue(){
    return isEndGame ? "Start" : 'Reset';
}

function displayLoading() {
    loadingBackground.classList.add('show');
}

function hideLoading() {
    loadingBackground.classList.remove('show');
}
