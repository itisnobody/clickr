"use strict";

let clicks = 0;
const timeout = 5000;
const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

const formatTime = (ms) => Number.parseFloat(ms / 1000).toFixed(1) + 'sec';

display.textContent = formatTime(timeout);
button.addEventListener('click', clicksCounter);
button.addEventListener('click', start);

function clicksCounter() {
  counter.textContent = ++clicks;
}

function start() {
  button.removeEventListener('click', start);
  const startTime = Date.now();
  const logTime = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(timeout - delta);
  }, 100);
  setTimeout(() => {
    button.removeEventListener('click', clicksCounter);
    clearInterval(logTime);
    display.textContent = 'Time Over';
  }, timeout)
}
