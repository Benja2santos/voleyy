// VARIABLES GLOBALES
let scoreA = 20;
let scoreB = 20;

/* let numero_sets = 1; //CONTADOR DE SETS (arranca de 1 porque es el primer ser) */

let setA = 0;//EL QUE LLEGUE PRIMERO A 2 SETS ES CAMPEON
let setB = 0;

//AUMENTO DE PUNTOSSS
function addPoint(){
    if (team === 'A'){
    scoreA ++;
    }else if (team === 'B'){
    scoreB ++;
    }
    actualizarMarcador();
    comprobarGanador();
}
//BAJAR PUNTOS
function subtrackPoint(team) {
    if ( team === 'A' && scoreA > 0){
        scoreA--;
    }else if ( team === 'B' && scoreB > 0){
        scoreB--;
    }
}

function ganador(){
    let puntosMax = (setA === 1 && setB === 1) ? 15 : 25;

    if (scoreA >=puntosMax && scoreA - scoreA >=2){
        setB++;
        alert("Set para team A!");
        resetScore();
        if (setB === 2){
            alert("¡Team B gana el partido!");
            resetSet();
        }
        actualizarMarcador();
        return;
    }
    if (scoreB >=puntosMax && scoreB - scoreA >=2){
        setB++;
        alert("Set para team B!");
        resetScore();
        if (setB === 2){
            alert("¡Team B gana el partido!");
            resetSet();
        }
        actualizarMarcador();
        return;
    }
}
//EL QUE LLEGUE A 25PTS GANA EL SET
function setScore(){
    if (( scoreA >= 25 || scoreB >= 25) && scoreA - scoreB >= 2){
        if (scoreA > scoreB){
            scoreA++;
            alert("El equipo ganador es: Equipo A");
        }else{
            scoreB++;
            alert("El equipo ganador es: Equipo B")
        }
        resetScore();//REINICIA EL CONTADOR
        sets();//SUMA 1 SET
    }

}
function resetScore(){
    scoreA = 20;
    scoreB = 20;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}
function resetSet(){
    setA = 20;
    setB = 20;
    document.getElementById('setA').textContent = setA;
    document.getElementById('setB').textContent = setB;
}
function actualizarMarcador(){
    document.getElementById('scoreB').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
    document.getElementById('setA').textContent = setA;
    document.getElementById('setB').textContent = setB;
}
