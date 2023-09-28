
class Persona {


    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;


    }
    get idPersona() {
        return this._idPersona;
    }

    // get y set nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(nom) {
        this._nombre = nom;
    }

    // get y set apellido
    get apellido() {
        return this._apellido;
    }
    set apellido(ape,) {
        this._apellido = ape;
    }

    // get y set edad
    get edad() {
        return this._edad;
    }
    set edad(eda) {
        this._edad = eda;
    }

    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad} `;
    }
}


// CLASE EMPLEADO...............


class Empleado extends Persona{
    static contadorEmpleados =0;
constructor( nombre, apellido, edad, sueldo){
    //llamada del constructor de la clase Persona
    super(nombre, apellido, edad)
    this._idEmpleado =++Empleado.contadorEmpleados;
    this._sueldo=sueldo;
}

// get IdEmpleadoo
get IdEmpleadoo(){
    return this._idEmpleado;
}


// get y set Sueldo
get Sueldo (){
    return this._sueldo
}

set Sueldo (suel){
this._sueldo =suel;
}

 toString(){

    return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
   
 }

}



// CLASE CLIENTE...................
class Cliente extends Persona{

    static contadorCliente = 0;

constructor( nombre, apellido, edad, fechaRegistro){
    //llamada del constructor de la clase Persona
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorCliente;
    this._fechaRegistro=fechaRegistro;
}
// get  Idclienete
get Idclienete(){
    return this._idCliente;
}

// get y set de FechaRegistro
get FechaRegistro(){
    return this._fechaRegistro;
}

set FechaRegistro(fecha){
this._fechaRegistro =fecha;
}
toString(){
    return `${super.toString()} ${this._idCliente}${this._fechaRegistro}`;
}

}



// OBJETOS O INSTANCIA DE LA CLASE PERSONA

let persona1 = new Persona( "Edwin", "Calle", 29);
console.log(persona1.toString());
let persona2 = new Persona( "Carlos", "Ramirez", 30);
console.log(persona2.toString());

// OBJETOS O INSTANCIA DE LA CLASE EMPLEDO
let empleado1 = new Empleado("Edwin", "Calle", 29, 1360);
console.log(empleado1.toString());
let empleado2 = new Empleado("Geovanny", "Calle", 29, 1370);
console.log(empleado2.toString());

// OBJETOS O INSTANCIA DE LA CLASE Cliente
let cliente1 = new Cliente("Geovanny", "Calle", 29, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Alexandra", "Calle", 28, new Date());
console.log(cliente2.toString());


