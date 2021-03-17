const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const score = document.querySelector('.score');
let scoreToken = 0;

document.addEventListener("keydown", function (e){
    if (e.code == 'ArrowUp' || e.code == 'Space'){
        jump();
        scoreToken = scoreToken+1;
        score.innerHTML = scoreToken;
        // moveRight();
    }
});

function jump(){
    if (dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout(function (){
        dino.classList.remove('jump')
    },300)
}


//Заготовка под движения влево вправо
// function moveRight(){
//     let left = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
//     setInterval(function() {
//             left = left + 1;
//             dino.style.left = left + 'px';
//         },10
//     );
// }




let isAliive = setInterval(function (){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let left = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
    if (cactusLeft < left+25 && cactusLeft > left-25 && dinoTop >= 140){
        alert('Вы проиграли! Счет: ' + scoreToken);
        dino.style.left = 0 + 'px';
        scoreToken =0;
    }
}, 10)