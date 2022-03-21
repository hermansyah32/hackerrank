const button = document.createElement("button");
button.id = "btn";
button.classList.add("btn");
button.innerHTML = "0";

button.addEventListener("click", (e) => {
  e.target.innerHTML++;
});

document.body.appendChild(button);
