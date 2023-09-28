
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




// let persona1 = new Persona( "Edwin", "Calle", 29);
// console.log(persona1.toString());
