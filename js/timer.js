let timer;

function handleTimer(){
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