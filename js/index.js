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


function setWordTitle(wordTitleValue){
    wordTitle.textContent = wordTitleValue;
}

function setWord(wordValue){
    word.textContent = wordValue;
}

function setTime(timeValue){
    time.textContent = timeValue;
}

function setWordInput(wordInputValue){
    wordInput.value = wordInputValue;
}

function setWordInputDisabled(isDisabledWordInput){
    wordInput.disabled = isDisabledWordInput;
}

function setWordList(wordListValue){
    wordList = wordListValue;
}

function setCorrectWords(correctWordsValue){
    correctWords.textContent = correctWordsValue;
}

function setCorrectWordList(correctWordListValue){
    correctWordList = correctWordListValue;
}

function setIncorrectWords(incorrectWordsValue){
    incorrectWords.textContent = incorrectWordsValue;
}

function setIncorrectWordList(incorrectWordListValue){
    incorrectWordList = incorrectWordListValue;
}

function setWordCount(wordCountValue){
    wordCount.textContent = wordCountValue;
}

function setCorrectWordCount(correctCountValue){
    correctCount.textContent = correctCountValue;
}

function setIncorrectWordCount(incorrectCountValue){
    incorrectCount.textContent = incorrectCountValue;
}


// window.onload = () => {
//     fetchData();
// }

resetButton.value = setBtnValue();

wordInput.addEventListener('keyup', (e) => handleInputWord(e));

resetButton.addEventListener("click", () => {
    isEndGame ? startGame() : resetGame();
    resetButton.value = setBtnValue();
})
  





