let balance = 0;

const spider = document.querySelector(".spider-button");
const balanceText = document.getElementById("balance");

spider.addEventListener("click", () => {

    balance += 1;

    balanceText.innerText = balance;

    spider.classList.remove("click");

    void spider.offsetWidth;

    spider.classList.add("click");


    let plus = document.createElement("div");
    plus.innerHTML = "+1";
    plus.className = "plus";

    spider.appendChild(plus);


    setTimeout(()=>{
        plus.remove();
    },800);

});
