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


/**
 * 제시어 상단 title 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} wordTitleValue 
 */
function setWordTitle(wordTitleValue){
    wordTitle.textContent = wordTitleValue;
}

/**
 * 제시어 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} wordValue 
 */
function setWord(wordValue){
    word.textContent = wordValue;
}

/**
 * 제한시간 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} timeValue 
 */
function setTime(timeValue){
    time.textContent = timeValue;
}

/**
 * 사용자 입력 칸 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} wordInputValue 
 */
function setWordInput(wordInputValue){
    wordInput.value = wordInputValue;
}

/**
 * 사용자 입력 칸 비활성화 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {boolean} isDisabledWordInput 
 */
function setWordInputDisabled(isDisabledWordInput){
    wordInput.disabled = isDisabledWordInput;
}

/**
 * API 호출로 받아온 단어리스트 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {Array<string>} wordListValue 
 */
function setWordList(wordListValue){
    wordList = wordListValue;
}

/**
 * 정답 단어칸 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} correctWordsValue 
 */
function setCorrectWords(correctWordsValue){
    correctWords.textContent = correctWordsValue;
}

/**
 * 정답 단어리스트 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {Array<string>} correctWordListValue 
 */
function setCorrectWordList(correctWordListValue){
    correctWordList = correctWordListValue;
}

/**
 * 오답 단어칸 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} incorrectWordsValue 
 */
function setIncorrectWords(incorrectWordsValue){
    incorrectWords.textContent = incorrectWordsValue;
}

/**
 * 오답 단어리스트 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {Array<string>} incorrectWordListValue 
 */
function setIncorrectWordList(incorrectWordListValue){
    incorrectWordList = incorrectWordListValue;
}

/**
 * 남은 단어 개수 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} wordCountValue 
 */
function setWordCount(wordCountValue){
    wordCount.textContent = wordCountValue;
}

/**
 * 정답 단어 개수 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} correctCountValue 
 */
function setCorrectWordCount(correctCountValue){
    correctCount.textContent = correctCountValue;
}

/**
 * 오답 단어 개수 값 설정 
 * @author 웹팀 김예원 2024-05-02
 * @param {string} incorrectCountValue 
 */
function setIncorrectWordCount(incorrectCountValue){
    incorrectCount.textContent = incorrectCountValue;
}


resetButton.value = setBtnValue();

wordInput.addEventListener('keyup', (e) => handleInputWord(e));

resetButton.addEventListener("click", () => {
    isEndGame ? startGame() : resetGame();
    resetButton.value = setBtnValue();
})
  





