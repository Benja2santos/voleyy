// VARIABLES GLOBALES
let scoreA = 0;
let scoreB = 0;

let numero_sets = 1; //CONTADOR DE SETS (arranca de 1 porque es el primer ser)

let campeonA = 0;//EL QUE LLEGUE PRIMERO A 2 SETS ES CAMPEON
let campeonB = 0;

//AUMENTO DE PUNTOSSS
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
//BAJAR PUNTOS
function subtrackPoint(team) {
    if ( team === 'A' && scoreA > 0){
        scoreA--;
        document.getElementById('scoreA').textContent = scoreA;
    }else if ( team === 'B' && scoreB > 0){
        scoreB--;
        document.getElementById('scoreB').textContent = scoreB;
    }
}
//EL QUE LLEGUE A 25PTS GANA EL SET
function setScore(){
    const diferencia = Math.abs(scoreA - scoreB);//VARIABLE PARA COMPARAR VALORES

    if (( scoreA >= 25 || scoreB >= 25) && diferencia >= 2){
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
//AUMENTA LOS SETS
function sets(){
    numero_sets ++;
    document.getElementById('sets').textContent = numero_sets;
}
//RESETEADORRR
function resetScore(){
    scoreA = 0;
    scoreB = 0;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}
//DEFINE EL GANADOR FINAL (para terminar)
function campeon(){
    /* se juegan 2 sets y que gane 2 sets de seguido es campeon.
    pero si empatan 1==1 se juega un 3er set a 15 puntos.
    */
}
//reiniciar partido(para hacer)
function resetMatch(){
    /* reiniciar partido, necesario para cuando salga el campeon empiece
    set y el score desde 0 */
}
