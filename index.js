var num = document.querySelector(".num");
var decreaseBtn = document.querySelector(".decrease");
var resetBtn = document.querySelector(".reset");
var increaseBtn = document.querySelector(".increase");
var n;
if (num && num.textContent)
    n = +num.textContent;
else
    n = 0;
console.log(n);
increaseBtn === null || increaseBtn === void 0 ? void 0 : increaseBtn.addEventListener("click", function () {
    n++;
    console.log(n);
    num.textContent = n.toString();
    if (n > 0)
        num.style.color = "green";
    else if (n === 0)
        num.style.color = "white";
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", function () {
    n = 0;
    num.textContent = "0";
    num.style.color = "white";
});
decreaseBtn === null || decreaseBtn === void 0 ? void 0 : decreaseBtn.addEventListener("click", function () {
    n--;
    num.textContent = n.toString();
    if (n < 0)
        num.style.color = "red";
    else if (n === 0)
        num.style.color = "white";
});
