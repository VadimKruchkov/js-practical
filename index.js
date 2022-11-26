// -------------------------------------------
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

btn.addEventListener("click", palindrom);
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    palindrom();
  }
});
function palindrom() {
  const palindrom = (str) => {
    str = input.value;
    str == str.toLowerCase();
    return str == str.split("").reverse().join("");
  };
  if (!palindrom() === true) {
    output.textContent = "Это слово не Палиндром";
    output.style.color = "red";
    input.style.backgroundColor = "red";
  } else {
    output.textContent = "Это слово Палиндром";
    output.style.color = "green";
    input.style.backgroundColor = "green";
  }
  setTimeout(() => {
    input.value = "";
    output.textContent = "";
    input.style.backgroundColor = "yellow";
  }, 5000);
}

// --------------------------------------------------
