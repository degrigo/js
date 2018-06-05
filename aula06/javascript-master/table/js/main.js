var data = [["jQuery","Biblioteca","16:30 PM - 22:30 AM","Hector Vido",""],
["Linux","Sistema","12:00 PM - 21:30 AM","Jonathan Alves",""],
["Python","Linguagem","14:30 PM - 20:30 AM","Lucas Beyeler",""],
["Segurança","Pentest","09:30 PM - 16:30 AM","Leonardo Mendes",""],
["Yoga","Meditação","17:00 PM - 10:30 AM","Paramahansa Yogananda",""],
["Linux","Boas Práticas","13:00 PM - 09:30 AM","Julio Balott",""],
["Linux","Mas Práticas","16:00 PM - 08:30 AM","Gabriel Policante",""]];
//row100 body
var cclass = 'cell100 column';
var tbody = $('tbody');
for(var z = 0; z < data.length; z++) {
    var tr = $('<tr>');
    for(var i = 0; i < data[z].length; i++) {
        var td = $('<td>')
          .append(data[z][i])
          .addClass(cclass + (i + 1));
        tr.append(td);
    }
    $(td)
      .append($('<i>').addClass('fa fa-plus-circle'))
      .append(' ')
      .append($('<i>').addClass('fa fa-ban'));
    tbody.append(tr);
}

$('.fa').css('font-size', '30px');

$('.fa-plus-circle').mouseover(function() {
  $(this).animate({'font-size': '50px'}, 500);
}).mouseout(function() {
  $(this).animate({'font-size': '30px'}, 500);
});

$('.fa-ban').click(function() {
  if(window.confirm('Deseja remover a linha?')) {
    $(this).closest('tr').fadeOut(500, function() {
        $(this).remove();
    });
  }
});


















