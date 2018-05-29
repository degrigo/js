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
    ["jQuery","Biblioteca","16:30 PM - 22:30 AM'","Hector Vido",""],
    ["Linux","Sistema","12:00 PM - 21:30 AM'","Jonathan Alves",""],
    ["Python","Linguagem","14:30 PM - 20:30 AM'","Lucas Beyeler",""],
    ["Segurança","Pentest","15:00 PM - 16:30 AM'","Leonardo Mendes",""],
    ["Yoga","Meditação","17:30 PM - 10:30 AM'","Paramahansa Yogananda",""],
    ["Linux","Boas Práticas","18:30 PM - 09:30 AM'","Julio Balott",""],
    ["Linux","Mas Práticas","22:00 PM - 08:30 AM'","Gabriel Policante",""]
];

var css_class = 'cell100 column';
var tbody = $('tbody');

var i1 = $('<i>').addClass('fa fa-plus-circle').mouseover(function(e) {
    alert('ok');
    });
    // e represena o evento de disparo
var i2 = $('<i>').addClass('fa fa-ban').click(function(e) {
    alert('ok2');
    });

// var definindo que a variável está dentro do for somente.
// percorrendo arrays
for(var i = 0; i < data.length; i++){
    //console.log(data[i]);
    // percorrendo valores e índices dos arrays
    var tr = $('<tr>');
    for(var t = 0; t < data[i].length; t++){
        ///console.log(data[i][t]);
        var td =  $('<td>').append(data[i][t]).addClass(css_class + (t + 1));
        tr.append(td);    
    }
    // console.log($(td));
    // console.log($('tr td:last'));
    $(td)
        .append($('<i>').addClass('fa fa-plus-circle'))
        .append(' ')
        .append($('<i>').addClass('fa fa-ban'));
    tbody.append(tr);
}

$('.fa').css('font-size', '30px');
$('.fa-plus-circle').mouseover(function() {
        $(this).animate({'font-size' : '50px'}, 500);
    }).mouseout(function(){
        $(this).animate({'font-size' : '30px'}, 500);
});
$('.fa-ban').click(function() {
    //confirma faz pergunta para usuário
    if(window.confirm('Deseja remover a linha')){
        //console.log('clicou em okay');
        //closest procura o elemento pai acima do que você está selecionando
        //código para remover o registro do servidor
        $(this).closest('tr').fadeOut(500, function() {
            $(this).remove();    
        });
    }
});

//i1.off('mouseover') remove o evento


/*
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
    */
    