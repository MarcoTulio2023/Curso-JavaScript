function executaratividade(){

    // Declare Variáveis
    let idade;
    let salario;
    let nomeCompleto;

    // Solicite Informações do Usuário
    nomeCompleto = window.prompt("Qual seu nome completo?");
    idade = Number.parseInt(window.prompt("Qual sua idade?"));
    salario = Number.parseFloat(window.prompt("Qual seu salario?"));

    // Utilize Alert e Window.confirm
    alert("Seja bem-vindo " + nomeCompleto);
    let confirmaSalario = window.confirm("Deseja visualizar informações do salario ajustado?");

    // Manipulação de Strings
    let nomeMaiusculas = nomeCompleto.toUpperCase();
    let nomeMinusculas = nomeCompleto.toLowerCase();
    let nomeLength = nomeCompleto.length;

    // Operadores Aritméticos e Atribuição
    let salarioCom10 = confirmaSalario ? salario * 1.10 : salario;
    let salarioMenos50 = salarioCom10 - 50;
    let salarioAtualizado = salarioMenos50;
    let idadePar = idade % 2;

    // Conversões e Formatação
    let salarioStr = String(salario);
    let salarioFormatado = salario.toFixed(2).replace(".", ",");
    let salarioFormatadoBR = salario.toLocaleString('pt-br', { style: "currency", currency: 'BRL' });

    // Operadores Relacionais, Lógicos e Ternário
    let maiorDeIdade = idade >= 18;
    let msgMaioridade = maiorDeIdade ? "maior de idade" : "menor de idade";

    // Manipulação do DOM
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Nome: ${nomeCompleto}</p>
        <p>Idade: ${idade}</p>
        <p>Salário: ${salarioFormatado}</p>
        <p>Status: ${msgMaioridade}</p>
        <p>Salário formatado: ${salarioFormatadoBR}</p>
        <p>Esse é seu nome em letras maiúsculas: ${nomeMaiusculas}</p>
        <p>Esse é seu nome em letras minúsculas: ${nomeMinusculas}</p>
        <p>Esse é o número de caracteres do seu nome: ${nomeLength}</p>
    `;
}

executaratividade();
