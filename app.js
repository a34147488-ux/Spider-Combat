let balance = 0;
let power = 1;
let income = 0;
let friends = 0;


const balanceText = document.getElementById("balance");

const spider = document.querySelector(".spider-button");



function update() {

    balanceText.innerText = balance;

}



spider.addEventListener("click", function(){


    balance += power;


    update();



    // эффект клика

    spider.style.transform = "scale(0.92)";


    setTimeout(()=>{

        spider.style.transform = "scale(1)";

    },100);



});





// сохранение прогресса


setInterval(()=>{


localStorage.setItem(
"spider_balance",
balance
);


},1000);





// загрузка


window.onload = ()=>{


let saved = localStorage.getItem(
"spider_balance"
);



if(saved){

balance = Number(saved);

}



update();



}
