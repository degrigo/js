var request = new XMLHttpRequest();
request.onload = function(r) {
    var json = JSON.parse(r.target.responseText);
    var tbody = document.getElementsByTagName('tbody')[0];
    for(var i = 0; i < json.length; i++) {
        var tr = document.createElement('tr');
        for(var z = 0; z < json[i].length; z++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(json[i][z]));
            td.className = 'cell100 column' + (z + 1);
            tr.appendChild(td);
        }
        tr.appendChild(document.createElement('td'));
        tbody.appendChild(tr);
    }
};
request.open(
    'get',
    'http://phpypesh.com.br/606/search.php',
    true); // tipo, url, async
request.send();