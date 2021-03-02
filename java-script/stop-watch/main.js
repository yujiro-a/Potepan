const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let intervalId = null;

start.addEventListener("click", function(){
  if(intervalId != null) {
    return;
  }
  intervalId = setInterval(function(){
    ms++;
    if(ms == 10) {
      s++;
      ms = 0;
      if(s == 60) {
        m++;
        s = 0;
        if(m == 60) {
          h++;
        }
      }
    }
    timeElement.innerHTML = h + ":" + m + ":" + s + ":" + ms;
  },100);
});

stop.addEventListener("click", function(){
  clearInterval(intervalId);
  intervalId = null;
});

reset.addEventListener("click", function(e){
  h = m = s = ms = 0;
  timeElement.innerHTML = h + ":" + m + ":" + s + ":" + ms;
});