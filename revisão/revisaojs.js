// REVISÃO - JAVASCRIPT
// FÓRMULAS MATEMÁTICAS:

// 1º) Escreva um programa que solicite ao usuário dos números e exiba as operações matemáticas:

function questao1() { 

    let number1 = parseFloat(prompt('Digite o primeiro número: '));
    let number2 = parseFloat(prompt('Digite o segundo número: '));

    let soma = number1 + number2 
    let sub = number1 - number2
    let multi = number1 * number2
    let div = number1 / number2

    alert(`Soma: ${soma}.\nSubtração: ${sub}.\nMultiplicação: ${multi}.\nDivisão: ${div}. `)

}

// 2º) Crie um programa que solicite ao usuário três notas e exiba a média aritmética:

function questao2() {

    let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
    let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
    let nota3 = parseFloat(prompt("Digite sua terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;
    alert(`Sua media é ${media.toFixed(2)}`);

}

// 3º) Escreva um programa que calcule o IMC do usuário usando a fórmula IMC = peso/altura*altura:

function questao3() {

    let peso = parseFloat(prompt('Digite seu peso:'));
    let altura = parseFloat(prompt('Digite sua altura:'));

    let imc = peso / (altura * altura);
    alert(`O seu IMC é ${imc.toFixed(2)}`)


}

// 4º) Escreva um programa que calcule a área de um círculo A = πr²:

function questao4() {

    let perimetro = parseFloat(prompt(`Digite o valor do perímetro: `));

    alert(`O perímetro do círculo é: ${perimetro.toFixed(2)}.`);

    let raio = parseFloat(prompt(`Digite o raio do círculo: `));

    let area = Math.PI * Math.pow(raio, 2);

    alert(`A área do círculo é: ${area.toFixed(2)}`);

}

// 5º) Escreva um programa que calcule as raízes de uma equação do segundo grau utilizando a fórmula de Bhaskara:

function questao5(){

    let discriminante = Number(prompt('Digite um número: '))

    discriminante = Math.pow(b, 2) - 4 * a * c;

    if (discriminante > 0){

        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        alert("as raizes rais são: ", raiz1, "e", raiz2);

    }else if (discriminante === 0){

        let raiz = -b / (2 * a);

        alert("A raiz real é: ", raiz);
    
    }else{

        alert("A equação nao possui raizes reais");

    }

}

// 6º) Escreva um programa que solicite ao usuário o comprimento e largura de uma sala comercial e calcule o perímetro e quantos metros quadrados possui:

function questao6(){

    let largura = parseFloat(prompt(`Digite a largura do retângulo: `));
    let comprimento = parseFloat(prompt(`Digite o comprimento do retângulo: `));

    let perimetro = 2 * (largura + comprimento);

    let area = largura * comprimento;

    alert(`O perímetro do retângulo é: ${perimetro}.`)
    alert(`A área do retângulo é: ${area}.`)

}

// 7º) Escreva um programa que leia a posição x e y de dois pontos no plano cartesiano, e calcule a distância entre ambos:

function questao7(){

    let x1 = parseFloat(prompt(`Digite a coordenada x do primeiro ponto: `));
    let y1 = parseFloat(prompt(`Digite a coordenada y do primeiro ponto: `));

    let x2 = parseFloat(prompt(`Digite a coordenada x do segundo ponto: `));
    let y2 = parseFloat(prompt(`Digite a coordenada y do segundo ponto: `));

    let diffX = x2 - x1;
    let diffY = y2 - y1;

    let distancia = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

    alert(`A distância entre os pontos é: ${distancia.toFixed(2)}.`);

}

// 8º) Crie um programa que solicite ao usuário o valor do raio de uma esfera, calcule e exiba seu volume:

function questao8(){

    let raio = parseFloat(prompt(`Digite o valor do raio da esfera: `));

    let volume = (4 /3) * Math.PI * Math.pow(raio, 3);

    alert(`O volume da esfera é: ${volume.toFixed(2)}`)

}

// 9º) Escreva um programa que, informado o raio, calcule a área de um círculo A = πr2

function questao9() {
    let raio = parseFloat(prompt("Digite o raio do círculo: "))
    let area = Math.PI * Math.pow(raio, 2);
    alert(`A área do círculo é: ${area.toFixed(2)}.`)
}

            //---------- STRINGS ----------//

// 10º) Solicite duas palavras ao usuário e concatene. Exiba o resultado:

function questao10(){

    let palavra1 = prompt(`Digite a primeira palavra: `);
    let palavra2 = prompt(`Digite a sua segunda palavra: `);

    let resulPalavras = palavra1 + palavra2;

    alert(`Palavra resultado final: ${palavra1+palavra2}.`)

}

// 11º) Crie um programa que receba uma palavra e exiba cada letra separadamente.

function questao11(){

    let palavra = prompt(`Digite uma palavra: `);

    for (let i = 0; i < palavra.length; i++){
        alert(palavra[i]);
    }

}

// 12º) Crie um programa que receba um nome e verifique se o mesmo começa com a letra “A”:

function questao12(){

    let nome = prompt(`Digite um nome: `);

    if (nome.charAt(0).toUpperCase() === 'A'){
        alert(`O nome começa com a letra A.`);
    }else{
        alert(`O nome não começa com a letra A.`)
    }

}

// 13º) Faça um programa que receba uma frase e exiba a quantidade de espaços em branco presentes na mesma.

function questao13(){
    let frase = prompt("Digite uma frase:");
    let qntespacos = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " ") {
        qntespacos++;
        }
    }

    alert(`A frase possui ${qntespacos} espaços em branco.`)
}

// 14º) 14) Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na mesma.

function questao14() {
    let palavra = prompt("Digite uma palavra: ")
    palavra = palavra.toLowerCase();
    let qntvogais = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];

        if (
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u" 
        ) {
            qntvogais++;
        }
    }
}