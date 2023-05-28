let userName = prompt("Please enter your name");
const userDiv = document.querySelector(".user-text");

function timeCount() {
  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var hour = today.getHours();
  if (hour < 10) hour = "0" + hour;

  var minute = today.getMinutes();
  if (minute < 10) minute = "0" + minute;

  var second = today.getSeconds();
  if (second < 10) second = "0" + second;

  document.getElementById("clock").innerHTML =
    day +
    " / " +
    month +
    " / " +
    year +
    " | " +
    hour +
    " : " +
    minute +
    " : " +
    second;

  document.getElementById("clock").classList.add("clock-color");

  setTimeout("timeCount()", 1000);
}

window.addEventListener("load", timeCount);

const html = `
<div>
<h3>KODLUYORUZ</h3>
<p>Merhaba ${userName.toUpperCase()}! Hoş Geldin!</p>
<p id="clock"></p>
<p>tarihinde Kodluyoruz Frontend Web Development Patikasinin Javascript bölümü 1. Ödevindesiniz.</p>
</div>

`;

userDiv.innerHTML = html;
