//setTimeout
//setInterval
$.ajax({
    type : 'GET',
    url  : 'http://phpypesh.com.br/606/search.php',
    beforeSend : function() {
        console.log('Carregando...');
    }
}).done(function(data){
    var tbody = $('tbody');
    for(var i = 0; i < data.length; i++) {
        var tr = $('<tr>');
        for(var x = 0; x < data[i].length; x++) {
            tr.append($('<td>')
                .append(data[i][x])
                .addClass('cell100 column' + (x + 1)));
        }
        tr.append('<td class="cell100 column5">');
        tbody.append(tr);
    }
});