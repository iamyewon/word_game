let endGame = true;
let wordList = [];
let limitTime = 20;

const wordCount = document.querySelector('.word-count');
const word = document.querySelector('.word');
const time = document.querySelector('.time');
const wordInput = document.querySelector('.word-input');

function fetchData(){
    axios.get('https://random-word-api.herokuapp.com/word?number=50')
    .then((response) => {
        wordList = response.data;
        wordCount.textContent = wordList.length;
        word.textContent = wordList[0];
        
        // 매우느림 ! 
    })
}
fetchData();


const timer = setInterval(() => {
    console.log(limitTime);
    if(limitTime <= 0){
        clearInterval(timer);
    }
    if(limitTime > 0){
        limitTime -= 1;
        time.textContent = `${limitTime}초`
    }
}, 1000);


wordInput.addEventListener('keyup', (e) => handleInputWord(e));
function handleInputWord(e){
    if(e.key === 'Enter'){
        
    }
}