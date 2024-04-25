let WORD_COUNT = 50;
let isEndGame = true;
let wordList = [];
let LIMIT_TIME = 3;

const wordCount = document.querySelector('.word-count');
const word = document.querySelector('.word');
const time = document.querySelector('.time');
const wordInput = document.querySelector('.word-input');
const resetButton = document.querySelector('.reset-button');

resetButton.value = btnValue();

function fetchData(){
    axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        wordList = response.data;
        wordCount.textContent = WORD_COUNT;
        word.textContent = wordList[0];
        // 로딩 
    })
}
fetchData();


const timer = setInterval(() => {
    if(LIMIT_TIME <= 0){
        clearInterval(timer);
        endGame();
        word.textContent = "Game Over";
        time.textContent = `Time's Up!`;
    }
    if(LIMIT_TIME > 0){
        time.textContent = `${LIMIT_TIME}초`
        LIMIT_TIME -= 1;
    }
}, 1000);


function endGame(){
    isEndGame = true;
    
}

function startGame(){
    isEndGame = false;
}


wordInput.addEventListener('keyup', (e) => handleInputWord(e));
function handleInputWord(e){
    if(e.key === 'Enter'){
        
    }
}

/* 게임 시작 & 리셋 버튼 */
function btnValue(){
    return isEndGame ? "Start" : 'Reset';
}