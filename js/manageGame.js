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