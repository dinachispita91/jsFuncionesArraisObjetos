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
