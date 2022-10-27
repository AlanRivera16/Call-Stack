
function sacarPapa(papa){ // Este mensaje se almacena en call stack para al final ser eliminada
    console.log(`Ya me comí la ${papa}`);//Solo mandamos un mensaje
}

function masticarPapas(p){ //La función socilita un argumento (las papas que se comieron)  
    if(p<=0) return //La condición hara que se detenga la ejecución del mismo hasta que se cumpla 

    console.log('Papas ya me comí' + p); //Mandamos en consola las papas 
    masticarPapas(p - 1) //Esta instrucción nos hará eliminar las papas poco a poco hasta que nos ayude a cumpli con la condición que ayudará a terminar con los call stacks 
}

function comprarNuevas(){
    console.log('Ya me las acabé, ahora a comprar otra'); //Consoleamos un mensaje
}

function abrirPapasPringles(){ //Ejecutaremos más funciones en esta
    sacarPapa('primer') //Mandamos llamar la función sacarPapa con el argumento que solicite "primer"
    sacarPapa('segunda') //Esta misma función se irán acomulando en el call stack juntos a las otras ya llamadas pero con un context diferente
    sacarPapa('tercer') //Esta misma función se irán acomulando en el call stack juntos a las otras ya llamadas pero con un context diferente
    sacarPapa('cuarta') //Esta misma función se irán acomulando en el call stack juntos a las otras ya llamadas pero con un context diferente
    masticarPapas(4); //Apilamos otra llamada de función para el call stack, esta función mantiene un argumento de tipo number solicitado
    comprarNuevas(); //Mandamos llamar la última función
}

abrirPapasPringles(); //Lamamos la primer función que comenzará como la ejecución global

