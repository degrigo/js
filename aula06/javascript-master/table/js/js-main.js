var data = [["jQuery","Biblioteca","16:30 PM - 22:30 AM","Hector Vido",""],
["Linux","Sistema","12:00 PM - 21:30 AM","Jonathan Alves",""],
["Python","Linguagem","14:30 PM - 20:30 AM","Lucas Beyeler",""],
["Segurança","Pentest","09:30 PM - 16:30 AM","Leonardo Mendes",""],
["Yoga","Meditação","17:00 PM - 10:30 AM","Paramahansa Yogananda",""],
["Linux","Boas Práticas","13:00 PM - 09:30 AM","Julio Balott",""],
["Linux","Mas Práticas","16:00 PM - 08:30 AM","Gabriel Policante",""]];

var cclass = 'cell100 column';
var tbody = document.getElementsByTagName('tbody')[0];
for(var z = 0; z < data.length; z++) {
    var tr = document.createElement('tr');
    for(var i = 0; i < data[z].length; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[z][i]));
        td.className = cclass + (i + 1);
        tr.appendChild(td);
    }
    var i;
    (i = document.createElement('i')).className = 'fa fa-plus-circle';
    td.appendChild(i);
    td.appendChild(document.createTextNode(' '));
    (i = document.createElement('i')).className = 'fa fa-ban';
    td.appendChild(i);
    tbody.appendChild(tr);
}