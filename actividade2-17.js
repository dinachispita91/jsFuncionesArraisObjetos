console.log(`  Programa que calcula un importe 
dado en las monedas correspondientes
(ej: 3,47€ = 1x2€ + 1x1€ + 2x20cts 
+ 1x5cts + 1x2cts   `);

function perres (dinero) {
    let inicio = dinero*100
    let centimos = inicio % 100
    let euros = ( inicio - centimos) /100
    console.log(`su dinero es ${euros}euros ${centimos} cent `);
    



}



perres(7,23)

//3monedas 2€
//1 de 1€
//1 de 0.20
//1 de 2cts
//1 de 1cts

//7->