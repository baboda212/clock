
setInterval(function(){
const tEl = document.getElementById('time');

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ampm = "<small>AM</small>";

if (h == 0){
    h = 12;
}else if (h >=12){
    h = h -12;
    ampm = "<small>PM</small>";
}
if (h >= 13) {
    
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  } else {
    
    if (h < 10) {
      h = "0" + h;
    }
  }

if(m<10){
    m = "0"+m;
}
if(s<10){
    s = "0"+s;
}

tEl.innerHTML = ampm +"." + h + ":" + m + ":" + s;
},1000)