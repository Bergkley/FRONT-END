const turnon = document.getElementById('turnOn');
const turnoff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function quandoalampadaestiverquebrada (){
    return lamp.src.indexOf('quebrada') > -1
}

function acender(){
    if(!quandoalampadaestiverquebrada ()){
        lamp.src = "./img/ligada.jpg";
    }
}

function apagar(){
    if(!quandoalampadaestiverquebrada()){
        lamp.src = "./img/desligada.jpg";
    }
}
function quebrar(){
    lamp.src = "./img/quebrada.jpg";
}




turnon.addEventListener('click',acender)
turnoff.addEventListener('click',apagar)
lamp.addEventListener('dblclick',quebrar)



