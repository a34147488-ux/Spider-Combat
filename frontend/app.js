// =============================
// Spider Empire
// Telegram Mini App Engine
// =============================


// Подключение Telegram

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();



// Пользователь Telegram

let user = tg.initDataUnsafe?.user;


if(user){

    document.getElementById("username").innerHTML =
    user.first_name;

}




// Данные игрока

let player = {

    balance:
    Number(localStorage.getItem("balance")) || 0,


    level:
    Number(localStorage.getItem("level")) || 1,


    power:
    Number(localStorage.getItem("power")) || 1,


    energy:
    Number(localStorage.getItem("energy")) || 1000

};




// Сохранение


function save(){

    localStorage.setItem(
        "balance",
        player.balance
    );


    localStorage.setItem(
        "level",
        player.level
    );


    localStorage.setItem(
        "power",
        player.power
    );


    localStorage.setItem(
        "energy",
        player.energy
    );

}




// Обновление экрана


function update(){


document.getElementById("balance").innerHTML =
format(player.balance);



document.getElementById("level").innerHTML =
player.level;



document.getElementById("power").innerHTML =
player.power;


}




// Красивое число

function format(number){

return number.toLocaleString("ru-RU");

}




// Нажатие по пауку


const tap =
document.getElementById("tap");



const spider =
document.getElementById("spider");



tap.onclick = hit;


spider.onclick = hit;



function hit(){


if(player.energy <=0){

showReward(
"NO ENERGY"
);

return;

}



let reward =
player.power;



player.balance += reward;


player.energy -=1;



showReward(
"+"+reward
);



animateSpider();



save();

update();


}




// Эффект награды


function showReward(text){


let box =
document.getElementById("reward");


box.innerHTML=text;


box.style.opacity=1;


box.style.transform=
"translateY(-20px)";


setTimeout(()=>{


box.style.opacity=0;


box.style.transform=
"translateY(0)";


},600);



}




// Анимация паука


function animateSpider(){


spider.style.transform=
"scale(.85)";


setTimeout(()=>{


spider.style.transform=
"scale(1)";


},120);


}




// Восстановление энергии


setInterval(()=>{


if(player.energy < 1000){

player.energy++;

save();

}


},3000);




// Первый запуск


update();
