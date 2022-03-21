const button5 = document.getElementById("btn5");
button5.addEventListener("click", (e) => {
  const btn1Text = document.getElementById("btn1").innerText;
  document.getElementById("btn1").innerText =
    document.getElementById("btn4").innerText;
  document.getElementById("btn4").innerText =
    document.getElementById("btn7").innerText;
  document.getElementById("btn7").innerText =
    document.getElementById("btn8").innerText;
  document.getElementById("btn8").innerText =
    document.getElementById("btn9").innerText;
  document.getElementById("btn9").innerText =
    document.getElementById("btn6").innerText;
  document.getElementById("btn6").innerText =
    document.getElementById("btn3").innerText;
  document.getElementById("btn6").innerText =
    document.getElementById("btn3").innerText;
  document.getElementById("btn3").innerText =
    document.getElementById("btn2").innerText;
  document.getElementById("btn2").innerText = btn1Text;
});
