
alert("Olá! Seja bem-vindo(a) à página de cadastro de vinhos da Vinharia Agnelo!");



// funcionario

var funcionario = prompt("Informe o funcionário que está cadastrando o produto:")

vaziofunc = (funcionario == "");

if (vaziofunc) {

    alert("Informe o nome de um funcionário")

}

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

var safra = prompt("Informe o ano da safra:");

vaziosafra = (safra == "");

if (vaziosafra) {

    alert("Por favor, informe uma safra válida")

}

// sugestões de harmonização

var harmonizacavinho = prompt("Informe o vinho escolhido: Tinto, Rosé ou Branco ").toLowerCase(); 

if (harmonizacaovinho === "tinto") {
    alert("Vinho Tinto combina com queijos curados")
} else if (harmonizacaovinho === "rosé" || harmonizacaovinho === "rose") {
    alert("Vinho Rosé combina com saladas frescas")

} else if (harmonizacaovinho === "branco") {
    alert("Vinho Branco combina com castanhas") 

} else { 
    alert("Insira vinhos existentes na loja") 
}

// país de origem 
var paisorigem = prompt("Informe o tipo de vinho para saber qual o seu país de origem: Tinto, Branco ou Rosé ").toLocaleLowerCase();

if (paisorigem === "tinto"){
    alert("O país de orgiem do Vinho Tinto é a Geórgia")
} else if(paisorigem === "branco"){
    alert("O país de origem do Vinho branco é a Geórgia")
} else if (oaisorigem === "rosé" || paisorigem === "rose"){
    alert("O país de origem do Vinho Rosé é a França")
} else {
    alert("Insira um vinho da loja")
}

// data de cadastro




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
Nome do Funcionário: ${funcionario},\n
Nome do Produto: ${nome}, \n 
Valor: R$ ${valornum}, \n
Tipo: ${tipo}, \n
Qtd. Disponível: ${qtdestnum} - ${statusestoque},\n
Ano da Safra: ${safranum} - ${classafra} \n
Sugestão de Harmonização: , \n 
Data do Cadastro: , \n
País de Origem: . 
` 
);



