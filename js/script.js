// Carne               400g por pessoa          + de 6 horas - 650
// Cerveja             1200ml por pessoa        + de 6 horas - 2000ml
// Refrigerante/agua   1000ml por pessoa        + de 6 horas - 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carne_por_pessoa(duracao) * adultos + (carne_por_pessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cerveja_por_pessoa(duracao) * adultos;
    let qtdTotalBebida = bebida_por_pessoa(duracao) * adultos + (bebida_por_pessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} garrafas de 2l de bebida</p>`
}

function carne_por_pessoa(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cerveja_por_pessoa(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebida_por_pessoa(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}