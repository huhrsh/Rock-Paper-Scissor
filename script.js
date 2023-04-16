const buttons=document.getElementsByClassName('button');
const innerButtons=document.getElementsByClassName('inner-button');
const rulesButton = document.getElementById('rules-button');
const rulesScreen=document.getElementById('outside-rule');
const crossButton=document.getElementById('close-button');
const lowerDiv=document.getElementById('lower-div');
const lowerDiv2=document.getElementById('lower-div2');
const playerChoice=document.getElementById('your-choice');
const playerChoiceInner=document.getElementById('your-choice-inner');
const computerChoice=document.getElementById('computer-choice');
const computerChoiceInner=document.getElementById('computer-choice-inner');
lowerDiv.classList.add('animate__fadeInUp');
lowerDiv.classList.add('animate__slow');
setTimeout(function(){
    lowerDiv.classList.remove('animate__fadeInUp');
    lowerDiv.classList.remove('animate__slow');
},2500);
rulesButton.classList.add('animate__fadeInRight');
rulesButton.classList.add('animate__slow');
setTimeout(function(){
    rulesButton.classList.remove('animate__fadeInRight');
    rulesButton.classList.remove('animate__slow');
},2500);
let choiceNumber;
const stats=document.getElementById('stats');
const score = document.getElementById('score-lower');
const statsHeading = document.getElementById('stats-heading');
let pointsScored=0;
const rePlay=document.getElementById('play-again');
// rule button hover 
rulesButton.onmouseover=function(){
    rulesButton.classList.add('animate__infinite');
    rulesButton.classList.add('animate__pulse');
}
rulesButton.onmouseout=function(){
    rulesButton.classList.remove('animate__infinite');
    rulesButton.classList.remove('animate__pulse');
}

rulesButton.onclick=function(){
    // rulesScreen.classList.add('animate__jackInTheBox');
    // rulesScreen.classList.add('animate__zoomIn');
    rulesScreen.style.display='flex';
    // rulesButton.classList.add('animate__tada');
    rulesScreen.classList.add('animate__flipInX');
    setTimeout(function(){
        // rulesButton.classList.remove('animate__tada');
        rulesScreen.classList.remove('animate__flipInX');
    },1000);
}

// cross button 
crossButton.onmouseover=function(){
    crossButton.classList.add('animate__infinite');
    crossButton.classList.add('animate__flash');
}
crossButton.onmouseout=function(){
    crossButton.classList.remove('animate__infinite');
    crossButton.classList.remove('animate__flash');
}

crossButton.onclick=function(){
    // rulesScreen.classList.add('animate__jackInTheBox');
    // rulesScreen.classList.add('animate__zoomIn');
    
    rulesScreen.classList.add('animate__flipOutX');
    crossButton.classList.add('animate__tada');
    setTimeout(function(){
        rulesScreen.style.display='none';
        rulesScreen.classList.remove('animate__flipOutX');
        crossButton.classList.remove('animate__tada');
    },1000);
}


for(let i of innerButtons){
    i.onclick=function(){
        choiceNumber= parseInt(i.getAttribute('data-value'));
        if(choiceNumber===0){
            playerChoice.style.backgroundImage='linear-gradient(to top,hsl(230, 89%, 62%), hsl(230, 89%, 65%))';
            playerChoiceInner.innerHTML=
            '<img class="icon2" src="./images/icon-paper.svg" alt="paper">';
        }
        else if(choiceNumber===1){
            playerChoice.style.backgroundImage='linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
            playerChoiceInner.innerHTML='<img class="icon2" src="./images/icon-scissors.svg" alt="paper">';
        }
        else{
            playerChoice.style.backgroundImage='linear-gradient(to top,hsl(349, 71%, 52%), hsl(349, 70%, 56%))';
            playerChoiceInner.innerHTML='<img class="icon2" src="./images/icon-rock.svg" alt="paper">';
        }
        setTimeout(function(){
            lowerDiv.classList.add('animate__zoomOut');
            lowerDiv2.classList.add('animate__zoomIn');
            setTimeout(function(){
                lowerDiv2.classList.remove('animate__zoomIn');
                lowerDiv.classList.remove('animate__zoomOut');
            },2500);
        },600);
        setTimeout(function(){
            lowerDiv2.style.display="flex";
            lowerDiv.style.display="none";

        },2000);
        // i.classList.add('animate__bounceIn');
        i.classList.add('animate__bounceOut');
        setTimeout(function(){
            i.classList.remove('animate__bounceOut');
        },1000);
        i.style.setProperty('--animate-duration', '1.5s');
        setTimeout(function(){
            computerTurn();
        },4000);
    }
}
for(let i of buttons){
    i.onmouseover=function(){
        i.classList.add('animate__pulse');
    }
    i.onmouseout=function(){
        i.classList.remove('animate__pulse');
    }
}

function computerTurn(){
    let arr=['p','s','r'];
    let userChoice=arr[choiceNumber];
    let computerChoiceNumber=Math.floor(Math.random()*3);
    let computersChoice=arr[computerChoiceNumber];
    computerChoice.classList.add('animate__bounceIn');
    setTimeout(function(){
        computerChoice.classList.remove('animate__bounceIn');
    },1000);
    computerChoice.style.setProperty('--animate-duration', '1.5s');
    computerChoiceInner.style.background='white';
    computerChoice.style.borderBottom='7px solid rgba(0, 0, 0, 0.29)';
    computerChoiceInner.style.borderTop='7px solid rgba(0, 0, 0, 0.29)';
    if(computersChoice=='p'){
        computerChoice.style.backgroundImage='linear-gradient(to top,hsl(230, 89%, 62%), hsl(230, 89%, 65%))';
        computerChoiceInner.innerHTML=
        '<img class="icon2" src="./images/icon-paper.svg" alt="paper">';
    }
    else if(computersChoice=='s'){
        computerChoice.style.backgroundImage='linear-gradient(to top,hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
        computerChoiceInner.innerHTML='<img class="icon2" src="./images/icon-scissors.svg" alt="paper">';
    }
    else{
        computerChoice.style.backgroundImage='linear-gradient(to top,hsl(349, 71%, 52%), hsl(349, 70%, 56%))';
        computerChoiceInner.innerHTML='<img class="icon2" src="./images/icon-rock.svg" alt="paper">';
    }
    setTimeout(function(){
        result(computersChoice,userChoice);
    },2000);

}


function result(computersChoice,userChoice){
    score.classList.add('animate__wobble');
    setTimeout(function(){
        score.classList.remove('animate__wobble');
    },1000);
    // lowerDiv2.style.width='80vw';
    // lowerDiv2.style.left='10vw';
    
    computerChoice.classList.add('animate__infinite');
    computerChoice.classList.add('animate__fast');
    playerChoice.classList.add('animate__infinite');
    playerChoice.classList.add('animate__fast');

    if(computersChoice==userChoice){
        statsHeading.innerText = 'DRAW';
    }
    
    else if(computersChoice=='p' && userChoice=='s'){
        playerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        playerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU WIN';
        pointsScored++;
    }
    else if(computersChoice=='p' && userChoice=='r'){
        computerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        computerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU LOSE';
    }

    else if(computersChoice=='r' && userChoice=='s'){
        computerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        computerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU LOSE';
    }

    else if(computersChoice=='r' && userChoice=='p'){
        playerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        playerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU WIN';
        pointsScored++;
    }

    else if(computersChoice=='s' && userChoice=='r'){
        playerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        playerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU WIN';
        pointsScored++;
    }
    
    else{
        computerChoice.style.boxShadow='0 0 20px hsl(217, 16%, 45%)';
        computerChoice.classList.add('animate__pulse');
        statsHeading.innerText = 'YOU LOSE';
    }
    stats.classList.add('animate__jackInTheBox');
    setTimeout(function(){
        stats.classList.remove('animate__jackInTheBox');
    },1000);
    score.innerText = pointsScored;
    stats.style.opacity='1';  
}

rePlay.onclick=function(){
    lowerDiv2.classList.add('animate__hinge');
    setTimeout(function(){
        lowerDiv2.style.display='none';
        stats.style.opacity='0';
        lowerDiv.style.display='flex';
        lowerDiv.classList.add('animate__jackInTheBox');
        computerChoice.style.background='none';
        computerChoice.style.border='none';
        computerChoiceInner.style.background='rgba(0, 0, 0, 0.171)';
        computerChoiceInner.style.border='none';
        computerChoiceInner.innerText="";
        setTimeout(function(){
            lowerDiv2.classList.remove('animate__hinge');
            lowerDiv.classList.remove('animate__jackInTheBox');
            playerChoice.style.boxShadow="none";    
            computerChoice.style.boxShadow="none";    
            playerChoice.classList.remove('animate__infinite');
            playerChoice.classList.remove('animate__pulse');
            playerChoice.classList.remove('animate__fast');
            computerChoice.classList.remove('animate__infinite');
            computerChoice.classList.remove('animate__pulse');
            computerChoice.classList.remove('animate__fast');
        },2000);
    },2000);
    // lowerDiv.classList.remove('zoomOut');
}
