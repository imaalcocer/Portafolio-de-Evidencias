document.getElementById('btnCalcular').addEventListener('click', function() {
    var tabla = parseInt(document.getElementById('tabla').value);
    var inicio = parseInt(document.getElementById('inicio').value);
    var fin = parseInt(document.getElementById('fin').value);
    calcularTabla(tabla, inicio, fin);
});

function calcularTabla(tabla, inicio, fin) {
    var div = document.getElementById('res');
    var resultado = '';
    for (var i = inicio; i <= fin; i++) {
        resultado += tabla + ' x ' + i + ' = ' + (tabla * i) + '<br>';
    }
    div.innerHTML = resultado;
}

