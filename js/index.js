let WORD_COUNT = 50;
let isEndGame = true;
let wordList = [];
let correctWordList = [];
let incorrectWordList = [];
const LIMIT_TIME = 20;

// let word; 

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


window.onload = () => {
    resetButton.value = setBtnValue();

    wordInput.addEventListener('keyup', (e) => handleInputWord(e));

    resetButton.addEventListener("click", () => clickBtn());
}


  





