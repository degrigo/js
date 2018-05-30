var request = new XMLHttpRequest();

//adicionando método onload
// variável response é a resposta do servidor que a função recebe como parâmetro 
request.onload = function(response) {
    // acesssando propriedade responseText
    //console.log(response.target.responseText);
    
    // eval interpreta o texto do array
    // var json = eval(response.target.responseText);
    
    // pegando os dados do JSON corretamente
    var json = JSON.parse(response.target.responseText);
    
    //for em cima do jsoonn
    //for  em cuma do json[i]
    //escrever todos os valores do json[i][t]
    // com console log
    
    // percorrendo o array
    for(var i = 0; i < json.length; i++) {
        for(var t = 0; t < json[i].length; t++) {
            console.log(json[i][t]);
        }
    }    
};

//abrindo requisição open é o método do objeto
// verbo, url, async
request.open(
        'get',
        'http://phpypesh.com.br/606/search.php',
         true
        ); // tipo, url, async
//post
request.send();