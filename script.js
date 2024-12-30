const time=document.getElementById('time');
const timeformat=document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
setInterval(showTime,1000);
});

const showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let seconds=date.getSeconds();

    let formattedMin = min.toString().padStart(2, '0');
    let formattedSec = seconds.toString().padStart(2, '0');
    console.log("hours"+hr+"minutes"+min+"seconds"+seconds);
    time.textContent = `${hr} : ${formattedMin} : ${formattedSec}`;
    timeformat.innerHTML=hr>12?"PM":"AM";
}
