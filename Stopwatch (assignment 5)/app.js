var minHeading =document.getElementById("minHeading");
var secHeading =document.getElementById("secHeading");
var mSecHeading =document.getElementById("mSecHeading");

var min = 0;
var sec = 0;
var msec = 0;
var interval;

function startTimer(){
    interval = setInterval(timer, 10)
}

function timer(){
    msec++
    mSecHeading.innerHTML = msec
    if(msec == 100){
        msec = 0 
        sec++
        secHeading.innerHTML = sec 
        if (sec == 60){
            sec = 0
            min++
            minHeading.innerHTML = min 
        }
        
    }
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    clearInterval(interval)
    var min = 0;
    var sec = 0;
    var msec = 0;

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"
}

function disableStart(ele){
    ele.disabled = true;

}