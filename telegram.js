// Telegram Mini App Connection

const tg = window.Telegram.WebApp;


// расширяем на весь экран

tg.expand();


// включаем цвета Telegram

tg.setHeaderColor("#080b18");

tg.setBackgroundColor("#080b18");



// данные игрока

let telegramUser = null;


if(tg.initDataUnsafe && tg.initDataUnsafe.user){

    telegramUser = tg.initDataUnsafe.user;


    console.log("Player:", telegramUser);


}else{

    console.log("Browser mode");

}




// функция получения профиля


function getPlayer(){

    if(!telegramUser){

        return {

            id:"guest",

            name:"Guest"

        };

    }



    return {

        id:telegramUser.id,

        name:
        telegramUser.first_name

    };

}




// приветствие


const playerData=getPlayer();


console.log(

"Spider Empire player:",

playerData.name

);




// кнопка Telegram

tg.MainButton.text="PLAY";

tg.MainButton.show();



tg.MainButton.onClick(()=>{


    tg.HapticFeedback.impactOccurred(
        "medium"
    );


});
