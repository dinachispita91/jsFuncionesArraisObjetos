console.log("funcion que devuelve el doble")
function doble(numero ) {
    console.log(numero*2)
}

doble(3)



console.log("cuadrado")

function area(numero) {
    console.log(numero*4);
    
}
area(6)




console.log ("circunferencia")
 function circunferencia(numero) {
    console.log(numero * 3.14 * numero * numero );

 }
 circunferencia(5)



console.log(`negativo o posotivo ejercio 7`);

function logico(numero) {
    console.log(numero >0 === true);
    
    }

logico(10)
logico(-12)



console.log(`año visiesto eje-10`);
let i = 0

function bisiesto(año) {
    if (año % 100===0 && año%400 === 0) {
        console.log(`bisiesto`)
    }else if (año % 100!==0 && año % 4===0){
        console.log(`bisiesto`);
    }else {
        console.log(` no bisiesto`);
    }
}
bisiesto( 2024)
bisiesto(1900)



