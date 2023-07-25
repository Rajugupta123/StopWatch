const clock = document.querySelector(".clock");


let sec = 0,min=0,hr=0,IntervalID;
const startStopWatch= (()=>{
        IntervalID = setInterval(()=>{
        if(sec < 59){
            sec++;
        }else if(min >= 59){
            hr++;
            min = 0;
        }else{
            sec = 0;
            min++;
        }

        //const seconds = String(sec).padStart(2,"0");
        const seconds = sec.toString().padStart(2,"0");
        const minutes = min.toString().padStart(2,"0");
        const hours = hr.toString().padStart(2,"0");


        clock.innerText = (`${hours}:${minutes}:${seconds}`);
    },1000)
})


const stopStopWatch= (()=>{
clearInterval(IntervalID);
})