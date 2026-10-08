let balance = 10000;


const balanceText = document.getElementById("balance");


function playGame(game){

let win = Math.floor(Math.random()*500)+50;


balance += win;


balanceText.innerText = balance;


alert(
"Выигрыш: +" + win + " CHIPS"
);

}



document
.querySelectorAll(".game button")
.forEach((button)=>{


button.addEventListener(
"click",
()=>{


let title =
button
.parentElement
.querySelector("h2")
.innerText;



playGame(title);



});


});
