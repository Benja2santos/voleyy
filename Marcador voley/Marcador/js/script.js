let scoreA = 0;
let scoreB = 0;

let numero_sets = 1;

let campeonA = 0;
let campeonB = 0;

function addPoint(team) {
    if ( team === 'A'){
        scoreA++;
        document.getElementById('scoreA').textContent = scoreA;
    }else if ( team === 'B'){
        scoreB++;
        document.getElementById('scoreB').textContent = scoreB;
    }
    setScore()
}

function subtrackPoint(team) {
    if ( team === 'A' && scoreA > 0){
        scoreA--;
        document.getElementById('scoreA').textContent = scoreA;
    }else if ( team === 'B' && scoreB > 0){
        scoreB--;
        document.getElementById('scoreB').textContent = scoreB;
    }
}
function setScore(){
    const diferencia = Math.abs(scoreA - scoreB);

    if (( scoreA >= 25 || scoreB >= 25) && diferencia >= 2){
        if (scoreA > scoreB){
            scoreA++;
            alert("El equipo ganador es: Equipo A");
        }else{
            scoreB++;
            alert("El equipo ganador es: Equipo B")
        }
        resetScore();
        sets();
    }

}
function sets(){
    numero_sets ++;
    document.getElementById('sets').textContent = numero_sets;
}
function resetScore(){
    scoreA = 0;
    scoreB = 0;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

function campeon(){
    /* se juegan 2 sets y que gane 2 sets de seguido es campeon.
    pero si empatan 1==1 se juega un 3er set a 15 puntos.
    */
}
