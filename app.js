let balance = 0;
let total = 0;

let clickPower = 0.001;



const balanceText = document.querySelector(".balance");
const coin = document.querySelector(".coin");



function updateBalance(){

    balanceText.innerHTML =
    balance.toFixed(3) + " <span>🪙</span>";

}




coin.addEventListener("click",()=>{


    balance += clickPower;
    total += clickPower;


    updateBalance();


    coin.style.transform="scale(0.94)";


    setTimeout(()=>{

        coin.style.transform="scale(1)";

    },100);



});





// пассивный доход

setInterval(()=>{

    balance += 0;

    updateBalance();

},1000);
