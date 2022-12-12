function displayTime(){
    let dateTime=new Date();
    let hrs=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let session=document.getElementById('sessions');

    if(hrs >= 12){
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }
    if(hrs>12){
        hrs=hrs-12;
    }
    if(min<10){
        min="0"+min;
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(displayTime,1);


setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate =new Date();
    const secratio=currentDate.getSeconds()/60;
    const minratio=(secratio + currentDate.getMinutes())/60;
    const hrsratio=(minratio + currentDate.getHours())/12;
    setRotation(secondHand,secratio)
    setRotation(minuteHand,minratio)
    setRotation(hourHand,hrsratio)
}

function setRotation(item, rotationRatio){
    item.style.setProperty('--rotation',rotationRatio*360)
}
setClock()