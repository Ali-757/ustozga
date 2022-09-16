let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let inputVa = document.querySelector(".input").value;
console.log(inputVa);
console.log("boss");



btn.addEventListener("click", () => {
  
  if (inputVa % 5===0 && inputVa % 3===0) {
    text.textContent = "FizzBuzz";
  }
  
  else if (inputVa % 3===0) {
    text.textContent = "Fizz";
  }
  
  else if (inputVa % 5===0) {
    text.textContent = "Buzz";
  }
  
  else {
    text.textContent = inputVa;
  }
})
