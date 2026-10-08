// =====================================
// Spider Empire
// Telegram Mini App Core
// =====================================



const tg = window.Telegram.WebApp;


tg.ready();

tg.expand();




// Telegram пользователь


let tgUser = tg.initDataUnsafe?.user;


if(tgUser){

    document.getElementById("username").innerText =
    tgUser.first_name;


}





// Игрок


let player = {


    balance:
    Number(localStorage.getItem("balance")) || 0,


    level:
    Number(localStorage.getItem("level")) || 1,


    power:
    Number(localStorage.getItem("power")) || 1,


    friends:
    Number(localStorage.getItem("friends")) || 0,


    income:
    Number(localStorage.getItem("income")) || 0



};





// сохранение


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
"friends",
player.friends
);



localStorage.setItem(
"income",
player.income
);



}








// обновление интерфейса


function update(){



document.getElementById(
"balance"
).innerText =
player.balance.toLocaleString();



document.getElementById(
"level"
).innerText =
"LEVEL " + player.level;



document.getElementById(
"power"
).innerText =
player.power;



document.getElementById(
"income"
).innerText =
player.income+"/h";



document.getElementById(
"friends"
).innerText =
player.friends;



document.getElementById(
"profileBalance"
).innerText =
player.balance;



document.getElementById(
"profileLevel"
).innerText =
player.level;



}









// ТАП ПАУКА



document
.getElementById("tap")
.onclick = function(){



let reward =
player.power;



player.balance += reward;



// уровень


if(player.balance >= player.level * 1000){


player.level++;


player.power++;


}






showReward(
"+"+reward
);




tg.HapticFeedback.impactOccurred(
"light"
);



save();


update();



};








// эффект награды



function showReward(text){



let reward =
document.getElementById(
"reward"
);



reward.innerText=text;


reward.style.opacity="1";


reward.style.transform=
"translateY(-60px)";



setTimeout(()=>{


reward.style.opacity="0";


reward.style.transform=
"translateY(0)";


},700);



}









// ===============================
// РЕФЕРАЛЬНАЯ СИСТЕМА
// ===============================



let referralCode =
localStorage.getItem(
"referralCode"
);



if(!referralCode){


referralCode =
"SPIDER"+Date.now();



localStorage.setItem(
"referralCode",
referralCode
);


}








function openFriends(){



hidePanels();



document.getElementById(
"friendsPanel"
).style.display="block";



let bot =
"YOUR_BOT_NAME";



document.getElementById(
"inviteLink"
).innerText =

"https://t.me/"
+
bot
+
"?start="
+
referralCode;



document.getElementById(
"friendsCount"
).innerText =
player.friends;



}







function copyInvite(){


let link =
document.getElementById(
"inviteLink"
).innerText;



navigator.clipboard.writeText(link);



}









// профиль



function openProfile(){


hidePanels();



document.getElementById(
"profilePanel"
).style.display="block";


}








function openHome(){


hidePanels();


}







function openUpgrade(){


alert(
"Upgrade system coming soon"
);


}








function hidePanels(){


document.getElementById(
"friendsPanel"
).style.display="none";


document.getElementById(
"profilePanel"
).style.display="none";


}







// запуск


update();

