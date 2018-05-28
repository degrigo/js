//utlizando jQuery
// .classe #id
// propriedade, valorr
// pode se criar elemento html '<h1>'
//$('.container-table100').css('backgroundColor', '#ff0000');

// adicionando linha na tabela de exemplo

//$('tbody'); //seleciona
//$('<tr>'); // criando elemento
//append adiciona o elemento
// não precisa fechar o elemento html. ele cria o final da tag sozinho

var css_class = 'cell100 column';

$('tbody')
    .append($('<tr>')
            .append($('<td>')
                    // adicionando texto e classe
                    .append('Coluna 1').addClass(css_class + '1')
                   )
            .append($('<td>')
                    .append('Coluna 2').addClass(css_class + '2')
                   )
            .append($('<td>')
                    .append('Coluna 3').addClass(css_class + '3')
                   )
            .append($('<td>')
                    .append('Coluna 4').addClass(css_class + '4')
                   )
            .append($('<td>')
                    .addClass(css_class + '5')
                        .append($('<i>').addClass('fa fa-plus-circle'))
                        .append($('<i>').addClass('fa fa-ban'))
                   )            
            );
    
    