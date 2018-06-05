//definindo por jQuery

//criando objeto literal

var css_class = 'cell100 column';

setInterval(function() { //SETANDO INTERVALO DE EXECUÇÃO
    $.ajax({
        //type seta o verbo
        type    : 'GET',
        // setando url
        url     : 'http://phpypesh.com.br/606/search.php',
        // beforeSend antes de enviar
        beforeSend : function() {
            console.log('Carregando...');
            }        
    }).done(function(data) { // parametro data
        //console.log(data);
        
        //faça um for para percorrer os dados de data
        var tbody = $('tbody');
        for(var i = 0; i < data.length; i++){
             var tr = $('<tr>');
            for(var t = 0; t < data[i].length; t++){
                //console.log(data[i][t]);
                tr.append($('<td>')
                    .append(data[i][t])
                    .addClass('cell1000 column' + (t + 1)));
            }            
            tr.append('<td class="cell100 column5">');
            tbody.append(tr);
        }
        
     }); // finalizando a requisiição com done
}, 5000);
