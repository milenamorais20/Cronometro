// let segundos = document.getElementById("segundos");
// let minutos  = document.getElementById("minutos");
// let horas    = document.getElementById("horas");

// var numeroS = 1;
// var numeroM = 1;
// var numeroH = 1;

// var li;
// var ul = document.getElementById("mylist");
// var time;
// var timeValue;
// var timeId;
// var intervalo;


// function atualizarTempo(){
//     if(numeroS < 60){
//         atualizarSegundos();
//     }
//     else if(numeroM < 60){
//         atualizarMinutos();
//     }
//     else{
//         atualizarHoras();
//     }
// } 

// function atualizarSegundos(){
//     segundos.innerHTML = numeroS;
//     numeroS++;
// }

// function atualizarMinutos(){
//     minutos.innerHTML = numeroM;
//     numeroM++;
//     numeroS = 0;
//     atualizarSegundos();
// }

// function atualizarHoras(){
//     horas.innerHTML = numeroH;
//     numeroH++;
//     numeroM = 0;
//     atualizarTempo();
// }

// function start(){
//     intervalo = setInterval(atualizarTempo, 1000)

// }

// function pause(){
//     clearInterval(intervalo)
// }


// // Essas 4 funções abaixo não funcionam. Eu gostaria de salvar o timer e zerar ele também. Desde já agradeço caso vocês refaçam essa parte para eu saber o que deve ser
// // feito. Fiz baseado na to do list, mas não deu certo. Creio que deva ser de outro modo.


// function save () {
//     time = document.getElementById("tempo");
//     timeId = ul.childElementCount;

//     li.appendChild(createItem(time.value,timeId));
//     li.appendChild(btnRemoveTime(timeId));
//     ul.appendChild(li);

//     time.value = "";
// }

// function clear () {

//     atualizarTempo.numeroS = 0;
//     atualizarTempo.numeroM = 0;
//     atualizarTempo.numeroH = 0;

//     let time = document.getElementById("tempo");
//     time.innerHTML = "00 : 00 : 00";

//     clearInterval(intervalo);

// }

// function createItem (_timeValue, timeId){

//     let li = document.createElement("li");

//     li.setAttribute("tempo", timeId)
//     li.appendChild(createTextNode(time.value));

//     return li;
// }

// function btnRemoveTime(){
//     let btn = document.createElement("button");

//     btn.appendChild(document.createTextNode("delete"));
//     btn.setAttribute("onClick","clear("+timeId+")");

//     return btn;
// }

let segundos = document.getElementById('segundos');
let minutos = document.getElementById('minutos');
let horas = document.getElementById('horas');
let played = false;
let interval;
let time = 0;

function start(){
    if (!played) {
        intervalo = setInterval(()=>{
            time++;
            updateScreen(time);
        },1000)
        played = true;
    }
}

function pause(){
    if (played) {
        clearInterval(intervalo);
        played = false;
    }
}

function updateScreen(time){
    let hour = Math.floor(time/60/60);
    let min = Math.floor(time/60);
    let sec = Math.floor(time);

    sec>59? sec=sec-min*60 : sec=sec
    min>59? min=min-hour*60 : min=min
    hour>59? hour=0 : hour=hour

    segundos.innerHTML = `${sec > 9 ? sec : "0" + sec}`
    minutos.innerHTML = `${min > 9 ? min : "0" + min}`
    horas.innerHTML = `${hour > 9 ? hour : "0" + hour}`
}

function save(){
    localStorage.setItem('timeSaved', time);
}

function del(){
    time = 0;
    updateScreen(time);
    localStorage.clear();
}

onload = () => {
    time = Number(localStorage.getItem('timeSaved')) || 0;
    updateScreen(time);
}