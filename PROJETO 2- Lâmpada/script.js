const turnOnOff = document.getElementById('turnOnOFF');
const lamp = document.getElementById('lamp');

function islampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if (!islampBroken ()) {
        lamp.src ='./img/ligada.jpg';
    }
}

function lampOff (){
    if(!islampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampOnOff (){
    if (turnOnOff.textContent === 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'desligar'
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click',lampOnOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick', (lampBroken)=>{
    lamp.src = './img/quebrada.jpg'
})

