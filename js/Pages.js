// import userIcon from './index.js'
import {timer} from '../js/index.js';

// document.addEventListener('DOMContentLoaded',()=>{
//   console.log(signUp);
//   console.log(userIcon2);
//   console.log(auth);
//   userIcon2.appendChild(signUp);
//   userIcon2.onclick=auth;
// });

let counter=0;
//quantity counter
let incrementButton = document.getElementById("Increment");
let decrementButton = document.getElementById("Decrement");
let display = document.getElementById("display");
incrementButton.onclick = increment;
decrementButton.onclick = decrement;
function increment() {
  if (counter < 10) {
    counter++;
    display.innerText = counter;
  }
}
function decrement() {
  if (counter > 0) {
    counter--;
    display.innerText = counter;
  }
}



let idTime=1;

for(let i=0;i<3;i++)
{
  let secs = document.querySelector(`#secs-${idTime}`);
  let mins = document.querySelector(`#mins-${idTime}`);
  let hrs = document.querySelector(`#hrs-${idTime}`);
  let days = document.querySelector(`#days-${idTime}`);
  // console.log(secs);
  // console.log(mins);
  // console.log(hrs);
  // console.log(days);
  //timerObject
  new timer(secs,mins,hrs,days);
  idTime++;
}
