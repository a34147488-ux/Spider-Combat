// Spider Empire Core Engine

let player = {
    energy: 500,
    coins: 0,
    level: 1,
    power: 1,
    income: 0,
    taps: 0
};


// загрузка сохранения
const save = localStorage.getItem("spiderEmpire");

if(save){
    player = JSON.parse(save);
}


// элементы
const energyText = document.querySelector(".energy");
const levelText = document.querySelector(".level");
const tapButton = document.querySelector(".tap");


function update(){

    energyText.innerText = player.energy;
    levelText.innerText = "LEVEL " + player.level;

    localStorage.setItem(
        "spiderEmpire",
        JSON.stringify(player)
    );

}


// тап по пауку

tapButton.onclick = function(){

    if(player.energy <= 0){
        return;
    }


    player.energy -= 1;

    player.coins += player.power;

    player.taps++;


    // каждые 100 тапов уровень
    if(player.taps % 100 === 0){

        player.level++;

        player.power++;

    }


    createEffect(event);


    update();

};



// восстановление энергии

setInterval(()=>{

    if(player.energy < 500){

        player.energy += 1;

        update();

    }

},3000);




// эффект при клике

function createEffect(e){

    let effect=document.createElement("div");

    effect.className="hit";

    effect.innerHTML="+"+player.power;


    effect.style.left=e.clientX+"px";
    effect.style.top=e.clientY+"px";


    document.body.appendChild(effect);


    setTimeout(()=>{

        effect.remove();

    },700);

}



update();
