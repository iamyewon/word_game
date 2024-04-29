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
