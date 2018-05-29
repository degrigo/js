var request = new XMLHttpRequest();

//adicionando método onload
// variável response é a resposta do servidor que a função recebe como parâmetro 
request.onload = function(response) {
    // acesssando propriedade responseText
    //console.log(response.target.responseText);
    
    // eval interpreta o texto do array
    var json = eval(response.target.responseText);
    console.log(json);
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