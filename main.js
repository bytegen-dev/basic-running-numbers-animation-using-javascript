// method1

let num = document.getElementById('num1')

const target = parseInt(num.dataset.val);

const intervalId = setInterval(function() {
  num.textContent++;
  console.log(num.textContent)
  if (num.textContent >= target) {
    clearInterval(intervalId);
  }
}, 30);

let num2 = document.getElementById('num2')

var target2 = parseInt(num2.dataset.val);

const intervalId2 = setInterval(function() {
  num2.textContent++;
  console.log(num2.textContent)
  if (num2.textContent >= target2) {
    clearInterval(intervalId2);
  }
}, 9);

let num3 = document.getElementById('num3')

var target3 = parseInt(num3.dataset.val);

const intervalId3 = setInterval(function() {
  num3.textContent++;
  console.log(num3.textContent)
  if (num3.textContent >= target3) {
    clearInterval(intervalId3);
  }
}, 7);
