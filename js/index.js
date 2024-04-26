let WORD_COUNT = 50;
let isEndGame = true;
let wordList = [];
let limitTime = 20;
let correctWordList = [];
let incorrectWordList = [];
let isLoading = false;

const wordCount = document.querySelector('.word-count');
const word = document.querySelector('.word');
const time = document.querySelector('.time');
const wordInput = document.querySelector('.word-input');
const wordTitle = document.querySelector('.word-title');
const correctWords = document.querySelector('.correct-words');
const correctCount = document.querySelector('.correct-count');
const incorrectWords = document.querySelector('.incorrect-words');
const incorrectCount = document.querySelector('.incorrect-count');
const resetButton = document.querySelector('.reset-button');
resetButton.value = setBtnValue();
const loadingBackground = document.querySelector('.loading-background');
const loader = document.querySelector('.loader');

// TODO : loading
loadingBackground.style.display = isLoading ? 'block' : 'none';
loader.style.display = isLoading ? 'block' : 'none';


function fetchData(){
    axios.get(`https://random-word-api.herokuapp.com/word?number=${WORD_COUNT}`)
    .then((response) => {
        wordList = response.data;
        wordCount.textContent = WORD_COUNT;
        word.textContent = wordList[0];
        isLoading = false;
    }).catch(() => console.error());
}

function handleTimer(){
    const timer = setInterval(() => {
        if(limitTime <= 0){
            clearInterval(timer);
            endGame();
        }
        if(limitTime > 0){
            time.textContent = `${limitTime}초`
            limitTime -= 1;
        }
    }, 1000);
}


function endGame(){
    limitTime = 0;
    // wordTitle.style.visibility = 'hidden';
    wordTitle.textContent = "";
    word.textContent = "Game Over";
    time.textContent = `Time's Up!`;
    isEndGame = true;
    resetButton.value = setBtnValue();
    wordInput.value = "";
    wordInput.disabled = true;
}


function startGame(){
    isLoading = true;
    correctWords.textContent = '';
    correctWordList = [];
    incorrectWords.textContent = '';
    incorrectWordList = [];
    limitTime = 20;
    fetchData(); // 여기도 텀이 생기는데 그냥 원래 받아온 값으로 랜덤돌려줘야할지. 
    wordTitle.textContent = "제시어";
    wordInput.disabled = false;
    correctCount.textContent = '';
    incorrectCount.textContent = '';
}



// TODO : resetGame 따로 만들어서 
//        리셋 버튼 눌렀을 때 / 시간이 다 되었을 때 구분해주면 좋을듯 

resetButton.addEventListener("click", () => {
    isEndGame = !isEndGame;
    resetButton.value = setBtnValue();
 
    if(isEndGame){
        endGame();
        wordList = [];

    }else{
        startGame();
        handleTimer();
    }
})


// TODO : filter ,, ?
function handleCorrectWord(correctWord){
    wordList = wordList.filter((value) => value !== correctWord);
}

wordInput.addEventListener('keyup', (e) => handleInputWord(e));

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

