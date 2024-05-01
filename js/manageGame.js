function endGame(){
    clearTimer();
    handleBasicSetting('', 'Game Over', `Time's Up!`, '', true);
    setEndGame(true);
    wordBox.classList.add('transparent');
}

function resetGame(){
    clearTimer();
    handleBasicSetting('', 'Word Game', '', '', true);
    resetList();
    resetCount();
    setEndGame(true);
}

async function startGame(){
    resetList();
    handleBasicSetting('제시어', null, null, null, false);
    resetCount();
    
    const result = await fetchData();
    if(!result){
        return;
    }
    setWordList(result.data);
    setWordCount(WORD_COUNT);
    setWord(wordList[0]);
    handleTimer();    
    setEndGame(false);
    wordBox.classList.remove('transparent');
}

function setEndGame(isEndGameValue){
    isEndGame = isEndGameValue;
    resetButton.value = setBtnValue();
}

function clearTimer(){
    timerBox.classList.remove('imminent-time');
    clearInterval(timer);
}


function resetList(){
    setWordList([]);
    setCorrectWords('');
    setCorrectWordList([]);
    setIncorrectWords('');
    setIncorrectWordList([]);
}

function handleBasicSetting(wordTitleValue, wordValue, timeValue, wordInputValue, isDisabledWordInput){
    if(wordTitleValue !== null) setWordTitle(wordTitleValue);
    if(wordValue !== null) setWord(wordValue);
    if(timeValue !== null) setTime(timeValue);
    if(wordInputValue !== null) setWordInput(wordInputValue);
    if(isDisabledWordInput !== null) setWordInputDisabled(isDisabledWordInput);
}

function resetCount(){
    setWordCount('');
    setCorrectWordCount('');
    setIncorrectWordCount('');
}
