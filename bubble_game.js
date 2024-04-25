let timer = 60;
let hitrn= 0;
let score = 0;


function makeBubble() {
    let pbtm = document.querySelector("#pbtm")

    let clutter = " ";
    for (let i = 1; i <= 157; i++) {
        let rvn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rvn}</div>`

    }
    pbtm.innerHTML = clutter;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitint").textContent = hitrn;

}


function runTimer() {


    let timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
             document.querySelector("#milisec").textContent = timer;
        }
        else {
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over </h1>`;
        }
    }, 1000)

}


function increaseScore() {
    score += 10;
    let scored = document.querySelector("#scoreHit");
    scored.textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (a) {
    let clickedNum = Number(a.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();

    }

})



runTimer();
makeBubble();
getNewHit();

