let nivelFome = 8;
let promocao = false;
let humor = 'Sonolento';
let nivelCansaço = 6;
let estacao = 'inverno'
let posicaoFinalAtleta = 'Nada'

if(promocao == true){
    console.log("Hora de comprar");
}else{
    console.log("Hora de esperar uma promoção");
}

if(nivelFome > 7){
    console.log('Hora de comer');
}else{
    console.log('Podemos comer mais tarde!');
}

if(humor == 'Sonolento' && nivelCansaço > 8){
    console.log('Hora de dormir');
}else{
    console.log('Ainda não é hora de dormir!');
}

if(estacao == 'inverno'){
    console.log('É inverno! Tudo está coberto de neve.');
}else if(estacao == 'outono'){
    console.log('É outono! As folhas estão caindo!');
}else if(estacao == 'verão'){
    console.log('É ensolarado e quente porque é verão!.');
}

switch(posicaoFinalAtleta){
    case 'primeiro lugar':
        console.log('Você ganha a medalha de ouro!');
        break;
    case 'segundo lugar':
        console.log('Você ganha a medalha de prata!')
        break;
    case 'terceiro lugar':
        console.log('Você ganha a medalha de bronze!')
        break;
    default:
        console.log('Nenhuma medalha concedida.');
}

