let raceNumber = Math.floor(Math.random() * 1000);
let timeEarly = false 
let RacerAge = 18

if(timeEarly == true && RacerAge >= 18){
    raceNumber += 1000;
}

if(RacerAge > 18 && timeEarly == true ){
    console.log(`Você correrá às 9h30, seu número de corrida é ${raceNumber}.`);
}else if(RacerAge > 18 && timeEarly == false){
    raceNumber += 1000;
    console.log(`Você correrá as 11h30, seu número de corrida é ${raceNumber}.`);
}else if(RacerAge < 18){
    raceNumber += 1000;
    console.log(`Você correrá as 12h30, seu número de corrida é ${raceNumber}.`);
}else{
    console.log('Verifique a mesa de registro');
}