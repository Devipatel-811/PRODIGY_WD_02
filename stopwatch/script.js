let min=0;
let sec=0;
let milli=0;
let appendmin=document.getElementById("min");
let appendsec=document.getElementById("sec");
let appendmilli=document.getElementById("mili");
let interval;

const starttimer=()=>{
  milli++;
  if(milli<=9){
    appendmilli.innerHTML='0'+milli;
  }
  if(milli>9){
    appendmilli.innerHTML=milli;
  }
  if(milli>99){
    sec++;
    appendsec.innerHTML='0'+sec;
    milli=0;
    appendmilli.innerHTML='0'+ 0;
  }
  if(sec>9){
    appendsec.innerHTML=sec;
  }
  if(sec>59){
    min++;
    appendmin.innerHTML='0'+min;
    sec=0;
    appendsec.innerHTML='0'+0;
  }
};
function begin(){
   clearInterval(interval);
   interval=setInterval(starttimer,10);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    milli='00';
    sec='00';
    min='00';
    appendmin.innerHTML=min;
    appendsec.innerHTML=sec;
    appendmilli.innerHTML=milli;
}
