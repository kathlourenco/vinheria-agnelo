let nomevinho = "";
let tipovinho = "";
let dataproducao = "";
let estoque = ""; 

function cadastrarVinho() {  
   
    nomevinho = prompt("Insira o nome de um vinho: ");
        
        if (nomevinho.trim() === ""){
            alert("Insira o nome de um vinho da nossa loja!");
            nomevinho = prompt("Insira o nome de um vinho: ");
        }


    tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
        
    tipovinho = tipovinho.trim().toLowerCase();
        if (tipovinho !== "tinto" && tipovinho !== "branco" && tipovinho !== "rosé" && tipovinho !== "rose"){
            alert("Insira um tipo de vinho da nossa loja!");
            tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
            tipovinho = tipovinho.trim().toLowerCase();
        }


    dataproducao = prompt("Insira a data de produção do vinho: ").trim();
    dataproducao = dataproducao.trim();
       
        if (dataproducao === "" || parseInt(dataproducao) < 1000 || parseInt(dataproducao) > 9999){
            alert("Insira uma data de produção válida!");
            dataproducao = parseInt(prompt("Insira a data de produção do vinho: ")); 
        }
        dataproducao = parseInt(String(dataproducao).trim());


    estoque = prompt("Insira quantos vinhos deseja levar: ");
        if (estoque.trim() === "" || parseInt(estoque) <= 0) {
            alert("Insira uma quantidade de vinhos válida no estoque!");
            estoque = prompt("Insira quantos vinhos deseja levar: ");
        }
        if (estoque.trim() === "" || parseInt(estoque) <= 0) {
            alert("Valor inválido! Por favor, insira uma quantidade maior que 0.");
            estoque = prompt("Insira quantos vinhos deseja levar: ");
    }
        estoque = parseInt(estoque);
        alert("A quantidade de vinhos é: " + estoque);
} 
cadastrarVinho();


function detalhesVinho(nome, tipo, estoque, producao) { 
    const mensagem = `Vinho cadastrado!
    Nome do vinho:  ${nome}
    Tipo do vinho:  ${tipo}
    Estoque disponível:  ${estoque}
    Ano de fabricação:  ${producao}`; 
            
            alert(mensagem);
            alert("Veja os detalhes da sua compra no console!");
                console.log("Detalhes da sua escolha: ");
                console.log(`Nome: ${nome}`);
                console.log(`Tipo:  ${tipo}`);
                console.log(`Estoque:  ${estoque}`);
                console.log(`Ano: " ${producao}`);
    

    if(estoque < 5){
        console.log ("Estoque do vinho escolhido : " + estoque + "  " + "Estoque baixo!");
    } 
    else if(producao < 2015){
            console.log("ano do vinho : " + producao + "  " + "  Vinho Antigo!");
    }
    else if(producao >= 2015 && producao <= 2019){
            console.log("ano do vinho : " + producao + "  " + "  Vinho Amadurecido!");
    }
    else if(producao >= 2020 ){
            console.log("ano do vinho : " + producao + "  " + "  Vinho jovem!");
    }
    else {
        if(producao < 2015){
            console.log("Data de produção do vinho : " + producao + "  " + "  Vinho antigo!");
        }
        if(producao >= 2015 && producao <= 2019){
            console.log("Data de produção do vinho : " + producao + "   " + "  Vinho amadurecido!");
        }
        if(producao >= 2020 ){
            console.log("Data de produção do vinho : " + producao + "  " + "  Vinho jovem!");
        }
        
    } 
    
} 
 
    detalhesVinho(nomevinho, tipovinho, estoque, dataproducao); 


