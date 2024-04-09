//---------- REVISÃO – 50 QUESTÕES JAVASCRIPT ----------//

//CONTEÚDO: Inputs, outputs, operadores, variáveis, funções condicionais, funções de repetição, arrays, métodos, buttons.

// 1º) Crie um programa que solicite a idade e informe se a pessoa é menor de idade ou não:

function questao1(){

    let idade =  prompt(`Digite a idade: `);

    if (idade >= 18){
        alert(`Maior de idade.`);
    }else{
        alert(`Menor de idade.`)
    }

}

// 2º) Crie um programa que solicite dois números e informe o maior:

function questao2(){

    let numero1 = prompt(`Digite o  primeiro número: `);
    let numero2 = prompt(`Digite o segundo número: `)

    //Converte os números de string para número.
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (numero1 > numero2){

        alert(`O primeiro número é maior: ${numero1}.`);

    }else if (numero2 > numero1){

        alert(`O segundo número é maior: ${numero2}.`);

    }else{

        alert(`Os números são iguais.`)

    }

}

// 3º) Crie um programa que solicite um número e informe se é par ou impar:

function questao3(){

    let numero = prompt(`Digite um número: `);

    //Converte os números de string para número.
    numero - parseInt(numero);

    if (numero % 2 === 0){

        alert(`O número é par.`);

    }else{

        alert(`O número é ímpar.`);

    }

}

// 4º) Crie um programa que solicite três numeros e informe se a soma é divisível por 5:

function questao4(){

    let num1 = parseInt(prompt(`Digite o primeiro número: `));
    let num2 = parseInt(prompt(`Digite o segundo número: `));
    let num3 = parseInt(prompt(`Digite o terceiro número: `));

    let soma = num1 + num2 + num3;

    if (soma % 5 === 0){

        alert(`A soma dos número é divisível por 5.`);

    }else{

        alert(`A soma dos número não é divisível por 5.`)

    }
}

// 5º) Crie um programa que solicite a idade de três pessoas e informe se uma á maior de idade, se todas são maiores de idade ou não:

function questao5(){

    let idade1 = parseInt(prompt(`Digite a idade da primeira pessoa: `));
    let idade2 = parseInt(prompt(`Digite a idade da segunda pessoa: `));
    let idade3 = parseInt(prompt(`Digite a idade da terceira pessoa: `));

    if (idade >= 18 && idade2 >= 18 && idade3 >= 18){

        alert(`Todas as pessoas são maiores de idade.`);

    }else if (idade1 < 18 && idade2 < 18 && idade3 < 18){

        alert(`Todas as pessoas são menores de idade.`)

    }else{

        alert(`Alguma das pessoas é maior de idade.`)

    }

}

// 6º) Crie um programa que leia a idade de uma pessoa e informe se ela está apta a votar:

function questao6(){

    let anoAtual = new Date().getFullYear();

    let anoNascimento = parseInt(prompt(`Digite o ano de nascimento: `));

    let idade = anoAtual - anoNascimento;

    if (idade >= 16){

        alert(`Você está apto(a) a votar.`);

    }else{

        alert(`Você ainda não está apto(a) a votar.`)

    }

}