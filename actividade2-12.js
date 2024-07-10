console.log(`temperatura ☀️🌦️🌄🌞 `);


function tiempo (temperatura ) {
    if (temperatura < 0 ) {
        console.log(`muy fio`);
    }else if (temperatura > 0&& temperatura <= 10 ){
        console.log(`frio`);
    }else if (temperatura >10 && temperatura <=20 ){
        console.log(`templado`);
    }else if (temperatura > 20 && temperatura <=29){
        console.log(`calor`);
    }else{
        console.log(`mucho calor`);
    }

}   
tiempo(-14)
tiempo(3)
tiempo(11)
tiempo(24)
tiempo(30)
