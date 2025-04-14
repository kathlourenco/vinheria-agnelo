
alert("Olá! Seja bem-vindo(a) à página de cadastro de vinhos da Vinharia Agnelo!");


var nome = prompt("Por favor, informe o nome do vinho a ser cadastrado:");

vazionome = (nome == "");

if (vazionome) {

    alert("Por favor, informe um nome válido")

}

var valor = prompt("Por favor, informe o valor do vinho a ser cadastrado:");

vaziovalor = (valor == "");

if (vaziovalor) {

    alert("Por favor, informe um valor válido")

}

var tipo = prompt("Agora, informe o tipo do vinho:");

vaziotipo = (tipo == "");

if (vaziotipo) {

    alert("Por favor, informe um tipo válido")

}

var qtdest = prompt("Informe a quantidade disponivel no estoque:");

vazioqtdest = (qtdest == "");

if (vazioqtdest) {

    alert("Por favor, informe uma quantidade válida")

}

var safra = prompt("Por fim, informe o ano da safra:");

vaziosafra = (safra == "");

if (vaziosafra) {

    alert("Por favor, informe uma safra válida")

}


valornum = parseFloat(valor);

qtdestnum = parseInt(qtdest);

safranum = parseInt(safra);

alert("Cadastro realizado! Veja os detalhes no console.");

classafra = "";

safrajovem = (safra >= 2020);
safraamadurecida = (safra <= 2019 && safra >= 2015);
safraantiga = (safra <= 2015);


if (safrajovem) {

    classafra = "Vinho Jovem";

}

else if (safraamadurecida) {

    classafra = "Vinho Amadurecido";

}

else if (safraantiga) {

    classafra = "Vinho Antigo";

}

else {


    
}

statusestoque = "";

estbaixo = (qtdestnum < 5);
estok = (qtdestnum >= 5);

if (estbaixo) {

    statusestoque = "ESTOQUE BAIXO";

}

else if (estok) {

    statusestoque = "";

}

else {


    
}

console.log(
`
Nome: ${nome}, \n 
Valor: R$ ${valornum}, \n
Tipo: ${tipo}, \n
Qtd. disponível: ${qtdestnum} - ${statusestoque}, \n
Ano da safra: ${safranum} - ${classafra}. 
` 
);
