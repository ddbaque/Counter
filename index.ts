const num = document.querySelector(".num") as HTMLSpanElement;

const decreaseBtn = document.querySelector(
  ".decrease"
) as HTMLButtonElement | null;

const resetBtn = document.querySelector(".reset") as HTMLButtonElement | null;

const increaseBtn = document.querySelector(
  ".increase"
) as HTMLButtonElement | null;

let n: number;

if (num && num.textContent) n = +num.textContent;
else n = 0;

console.log(n);

increaseBtn?.addEventListener("click", () => {
  n++;
  console.log(n);
  num.textContent = n.toString();
  if (n > 0) num.style.color = "green";
  else if (n === 0) num.style.color = "white";
});

resetBtn?.addEventListener("click", () => {
  n = 0;
  num.textContent = "0";
  num.style.color = "white";
});

decreaseBtn?.addEventListener("click", () => {
  n--;
  num.textContent = n.toString();
  if (n < 0) num.style.color = "red";
  else if (n === 0) num.style.color = "white";
});
