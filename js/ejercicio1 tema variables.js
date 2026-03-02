// Ejercicio 1: Variables y Objetos
"use strict";
// Declaración de variables 3 formas: var yano se usa, con let y const
class persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
    saludar(){
      console.log("Hola me llamo : " + this.nombre + " " + this.apellido);
    }
}

// Crear objeto p1 con nombre Kevin y apellido Rojas
let p1 = new persona("Kevin", "Rojas");
let p2 = new persona("Maria", "Gomez");

console.log(p1.apellido);
console.log(p2.nombre);
p1.saludar();




