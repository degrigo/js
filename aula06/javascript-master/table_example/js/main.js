//utlizando jQuery
// .classe #id
// propriedade, valorr
// pode se criar elemento html '<h1>'
//$('.container-table100').css('backgroundColor', '#ff0000');

// adicionando linha na tabela de exemplo

//$('tbody'); //seleciona
//$('<tr>'); // criando elemento
//append adiciona o elemento

$('tbody')
    .append($('<tr>')
            .append($('<td>')
                    .append('Coluna 1').addClass('cell100 column1')
                   )
            .append($('<td>')
                    .append('Coluna 2').addClass('cell100 column2')
                   )
            .append($('<td>')
                    .append('Coluna 3').addClass('cell100 column3')
                   )
            .append($('<td>')
                    .append('Coluna 4').addClass('cell100 column4')
                   )
            .append($('<td>')
                    .append('Coluna 5').addClass('cell100 column5')
                   )            
            );