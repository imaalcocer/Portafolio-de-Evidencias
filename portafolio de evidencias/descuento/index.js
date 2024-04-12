var boton = document.getElementById('btncalcular'); // 'btncalcular' en lugar de 'btnCalcular'

boton.addEventListener('click', calcular);

function calcular() {
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento = parseFloat(document.getElementById('descuento').value);
    var precioFinal = precio - (precio * descuento); // Cambié 'final' a 'precioFinal'
    document.getElementById('precio_final').innerText = precioFinal.toFixed(2); // Usar toFixed(2) para mostrar solo dos decimales
}
