let timer;

/**
 * 타이머 함수
 * @author 웹팀 김예원 2024-05-02
 * @description 정해진 시간을 1초씩 줄이는 타이머, 
 * 5초 이하시 border color를 red로 변경, 
 * 0초가 되면 타이머 종료
 */
const handleTimer = () => {
    let limitTime = LIMIT_TIME;
    setTime(`${limitTime}초`);
    timer = setInterval(() => {
        if(limitTime <= 0){
            clearInterval(timer);
            endGame();
        }
        if(limitTime > 0){
            limitTime -= 1;
            setTime(`${limitTime}초`);
            if(0 < limitTime && limitTime <= 5){
                timerBox.classList.add('imminent-time');
            }
        }
    }, 1000);
}