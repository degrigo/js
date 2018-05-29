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

var data = [
    ["jQuery","Biblioteca","16:30 PM - 22:30 AM'","Hector Vido","13"],
    ["Linux","Sistema","12:00 PM - 21:30 AM'","Jonathan Alves","12"],
    ["Python","Linguagem","14:30 PM - 20:30 AM'","Lucas Beyeler","08"],
    ["Segurança","Pentest","15:00 PM - 16:30 AM'","Leonardo Mendes","09"],
    ["Yoga","Meditação","17:30 PM - 10:30 AM'","Paramahansa Yogananda","16"],
    ["Linux","Boas Práticas","18:30 PM - 09:30 AM'","Julio Balott","33"],
    ["Linux","Mas Práticas","22:00 PM - 08:30 AM'","Gabriel Policante","05"]
];

// var definindo que a variável está dentro do for somente.
// percorrendo arrays
for(var i = 0; i < data.length; i++){
    //console.log(data[i]);
    // percorrendo valores por índices dos arrays
    for(var t = 0; t < data[i].length; t++){
        console.log(data[i][t]);
    }
}

var css_class = 'cell100 column';

var i1 = $('<i>').addClass('fa fa-plus-circle').mouseover(function(e) {
    alert('ok');
    });
    // e represena o evento de disparo
var i2 = $('<i>').addClass('fa fa-ban').click(function(e) {
    alert('ok2');
    });
//i1.off('mouseover') remove o evento

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
                        .append(i1)
                        .append(' ') // gambiarra
                        .append(i2)
                   )            
            );
    
    