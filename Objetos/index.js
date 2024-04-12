//objetos    atributos y metodos 
//En JS puedes crear objetos sin necesidad de tener una clase 

const  persona = {
    nombre: 'Jesus',
    apellidos: 'Perez',
    edad:15,
    saludar: function(){
        return 'Hola, soy '+this.nombre
    }
}
const  persona2 = {
    nombre: 'Pepe',
    apellidos: 'Pecas',
    edad:25,
    saludar: function(){
        return 'Hola, soy '+this.nombre
    }
}
let personas = [persona,persona2];
console.log(personas[0].saludar());

let tabla = '';
persona.nombre ='Pablo'
for(let i = 0; i<personas.length; i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'
    +personas[i].nombre+'</td><td>'
    +personas[i].apellidos+'</td><td>'
    +personas[i].edad+'</td></tr>';
}
document.getElementById('tabla').innerHTML = tabla;