
/**
 * 타임오버로 게임이 종료 될 때
 * @author 웹팀 김예원 2024-05-02
 */

//전역
function endGame(){
    // endGame스코프
    clearTimer();
    // const obj = {
    //     wordTitleValue : '', 
    //     wordValue : 'Game Over', 
    //     timeValue : `Time's Up!`, 
    //     wordInputValue : '', 
    //     isDisabledWordInput : true
    // }
    handleBasicSetting('', 'Game Over', `Time's Up!`, '', true);
    setEndGame(true);
    wordBox.classList.add('transparent');
}

/**
 * 리셋 버튼으로 게임을 종료할 때
 * @author 웹팀 김예원 2024-05-02
 */
function resetGame(){
    clearTimer();
    handleBasicSetting('', 'Word Game', '', '', true);
    resetList();
    resetCount();
    setEndGame(true);
}


/**
 * 게임을 시작할 때
 * @author 웹팀 김예원 2024-05-02
 * @description 게임 시작 시 API 호출하고 단어를 받아와서 진행함
 */
function startGame(){
    resetList();
    handleBasicSetting('제시어', null, null, null, false);
    resetCount();
    debounce(fetchData, 1000); // 디바운싱이 모두 끝나면 testFunc가 호출되어야함 
    // testFunc(); 여기서 호출하면 wordList[0] 이 없다?는 에러가 나옴 
}

function testFunc(){
    setWordList(result.data);
    setWordCount(WORD_COUNT);
    setWord(wordList[0]);
    handleTimer();    
    // setEndGame(false);
    wordBox.classList.remove('transparent');
}

/**
 * 게임이 진행중인지, 끝났는지 여부 파악하고 버튼 변경해주기
 * @author 웹팀 김예원 2024-05-02
 * @param {boolean} isEndGameValue 게임이 끝났는지
 */
function setEndGame(isEndGameValue){
    isEndGame = isEndGameValue;
    resetButton.value = setBtnValue();
}

/**
 * 타이머 종료
 * @author 웹팀 김예원 2024-05-02
 */
function clearTimer(){
    timerBox.classList.remove('imminent-time');
    clearInterval(timer);
}


/**
 * List 모두 리셋 
 * @author 웹팀 김예원 2024-05-02
 * @description API 호출로 받아온 초기 단어 리스트, 정답 단어 리스트, 오답 단어 리스트 초기화
 */
function resetList(){
    setWordList([]);
    setCorrectWords('');
    setCorrectWordList([]);
    setIncorrectWords('');
    setIncorrectWordList([]);
}

/**
 * Count 모두 리셋 
 * @author 웹팀 김예원 2024-05-02
 * @description 남은 단어 카운트, 정답 단어 카운트, 오답 단어 카운트 초기화
 */
function resetCount(){
    setWordCount('');
    setCorrectWordCount('');
    setIncorrectWordCount('');
}


/**
 * 기본적인 세팅
 * @author 웹팀 김예원 2024-05-02
 * @param {string} wordTitleValue 제시어 상단 제목
 * @param {string} wordValue 제시어
 * @param {string} timeValue 제한시간
 * @param {string} wordInputValue 사용자 입력 칸
 * @param {boolean} isDisabledWordInput 사용자 입력 칸 비활성화 여부
 */
function handleBasicSetting(wordTitleValue, wordValue, timeValue, wordInputValue, isDisabledWordInput){
    if(wordTitleValue !== null) setWordTitle(wordTitleValue);
    if(wordValue !== null) setWord(wordValue);
    if(timeValue !== null) setTime(timeValue);
    if(wordInputValue !== null) setWordInput(wordInputValue);
    if(isDisabledWordInput !== null) setWordInputDisabled(isDisabledWordInput);
}




let result;

// 버튼 중복 클릭 방지(디바운싱)
function debounce(func, timeout = 1000) {
    let debounceTimer;
    console.log(!!debounceTimer);
    // return (...args) => {}
    if (!debounceTimer) {
        result = func();
        console.log(!!debounceTimer, ">>>>");
    }
    clearTimeout(debounceTimer);
    console.log(!!debounceTimer);
    
    debounceTimer = setTimeout(() => {
        debounceTimer = undefined;
        console.log(!!debounceTimer, ">>>>");
    }, timeout);
}


const clickBtn = () => {
    isEndGame ? startGame() : resetGame();
    resetButton.value = setBtnValue();
}
