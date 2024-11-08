// Praticar o curso de Java Script

function executarAtividade(){
    let idade;
    let altura;
    let nome;

    nome = window.prompt("Qual seu nome?");
    idade = Number.parseInt(window.prompt("Qual sua idade?"));
    altura = Number.parseFloat(window.prompt("Qual sua altura?"));

    window.alert(`Seja bem vindo ${nome}`);

    let resposta = window.confirm('Você deseja continuar com a atividade?');
    let mensagem = resposta ? "oK vamos continuar" : "Encerrando";
    document.write(mensagem);
    if (!resposta) return;

    let x = 1;
    let y = 2;

    let soma = x + y;
    let subtracao = x - y;
    let multiplicacao = x * y;
    let divisao = x / y;
    let resto = x % y;
    let potencia = x ** y;

    document.write('A soma dos dois números é: ' + soma);
    document.write('A soma dos dois números é: ' + subtracao);
    document.write('A soma dos dois números é: ' + multiplicacao);
    document.write('A soma dos dois números é: ' + divisao.toFixed(2));
    document.write('A soma dos dois números é: ' + resto);
    document.write('A soma dos dois números é: ' + potencia);

    document.write(soma.toString().toUpperCase() + '<br>');
    document.write(subtracao.toString().toUpperCase() + '<br>');
    document.write(multiplicacao.toString().toUpperCase() + '<br>');
    document.write(divisao.toString().toUpperCase() + '<br>');
    document.write(resto.toString().toUpperCase() + '<br>');
    document.write(potencia.toString().toUpperCase() + '<br>');
    document.write(soma.toString().toLowerCase() + '<br>');
    document.write(subtracao.toString().toLowerCase() + '<br>');
    document.write(multiplicacao.toString().toLowerCase() + '<br>');
    document.write(divisao.toString().toLowerCase() + '<br>');
    document.write(resto.toString().toLowerCase() + '<br>');
    document.write(potencia.toString().toLowerCase() + '<br>');


    let salario = window.prompt("Digite o valor do seu salário:")
    document.write(salario.toLocaleString('pt-br', {Style: 'Currency', currency: 'BRL'}))

    let a = idade + 5;
    let b = a * 3;
    idade = idade + 4;
    idade = idade / 2;
    let nova = idade **= 2 + idade--;

    document.write(nome.replace('a','trocado por b'))
    document.write(nome.length)

    document.querySelector('#olamundo');
    document.getElementById('olamundo');

    1 + 1
    1 - 1
    1 * 1
    1 / 1
    1 % 1
    1 ** 1
    1 > 1
    1 < 1
    1 >= 1
    1 <= 1
    1 == 1
    1 != 1
    let m = 1
    !m ? "True" : "False"
    !m && !m ? "True" : "False"
    !m || !m ? "True" : "False"

    document.write("Esse é o nome final: " + nome)
    document.write("Essa é a idade final: " + idade)
    document.write("Essa é a altura final:" + altura)
    document.write("Muito Obrigado!")

    }
executarAtividade();