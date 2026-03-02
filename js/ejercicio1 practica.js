// Ejercicio 1: Cree una clase llamada vehiculo con 3 propiedades
"use strict";
// Declaración de clase
class vehiculos {
    constructor(marca,modelo,color) {
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
        this.velocidad=0;
    }
    acelerar(){
      this.velocidad += 10;
    }
    desacelerar(){
        this.velocidad -= 10;
    }
}

// Crear objeto auto1
let autoLuis = new vehiculos("TOYOTA", "RAV4","AZUL");
console.log(autoLuis);
autoLuis.acelerar();
console.log(autoLuis);

