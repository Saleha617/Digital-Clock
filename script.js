const time  =document.getElementById('time');
const format=document.getElementById("format");
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);
});
const showTime=()=>{
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    format.innerHTML=hr>12?"PM":"AM"
    if(hr>12)
    hr=hr-12;
    hr=hr<10 ? '0'+hr: hr;
    min=min<10 ? '0'+min: min;
    sec=sec<10 ? '0'+sec: sec;

   // console.log("hours:"+hr+"mins:"+min+"secs:"+sec);
    time.textContent=hr+":"+min+":"+sec;
    
}