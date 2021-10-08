const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(2);
        const minimo = (18.5 * (altura**2)).toFixed(2);
        const maximo = (25 * (altura**2)).toFixed(2);
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'no peso ideal.';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II.';
        }else {
            classificacao = 'obesidade grau III.';
        }

        resultado.textContent = `Seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}. Procure manter o seu peso entre ${minimo} kg e ${maximo} kg`;

    }
    else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}

calcular.addEventListener('click', imc);
calcularpesoideal.addEventListener('click', pesoideal);
