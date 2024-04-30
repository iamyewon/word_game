let timer;

function handleTimer(){
    let limitTime = LIMIT_TIME;
    time.textContent = `${limitTime}초`
    timer = setInterval(() => {
        if(limitTime <= 0){
            clearInterval(timer);
            endGame();
        }
        if(limitTime > 0){
            limitTime -= 1;
            time.textContent = `${limitTime}초`
            if(0 < limitTime && limitTime <= 5){
                timerBox.classList.add('imminent-time');
            }
        }
    }, 1000);
}