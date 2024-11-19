let gameSeq=[];
let userSeq=[];
let started=false;

let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    };

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};


    function levelUp(){
        level++; 
        h2.innerText=`Level ${level}`;
        let rndInd=Math.floor(Math.random()*3);
        let rndColor=btns[rndInd];
        let rndBtn=document.querySelector(`.${rndColor}`);
        gameSeq.push(rndColor);
        console.log(gameSeq);
        gameFlash(rndBtn);
    }

})
function checkAns(idx){
   
   if (gameSeq[idx]===userSeq[idx]){
 if(userSeq.length==gameSeq.length){
    levelUp();
 }

   }else{
    h2.innerText="Game Over!! Press any key to restart";
   }
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
   
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}