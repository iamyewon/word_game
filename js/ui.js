/**
 * 게임이 진행중인지 끝났는지 여부에 따라 버튼 값 변경
 * @author 웹팀 김예원 2024-05-02
 * @returns {string}
 */
function setBtnValue(){
    return isEndGame ? "Start" : 'Reset';
}

/**
 * 로딩 화면 보이도록 하는 클래스를 추가하는 함수 
 * @author 웹팀 김예원 2024-05-02
 */
function displayLoading() {
    loadingBackground.classList.add('show');
}

/**
 * 로딩 화면 보이도록 하는 클래스를 제거하는 함수 
 * @author 웹팀 김예원 2024-05-02
 */
function hideLoading() {
    loadingBackground.classList.remove('show');
}
