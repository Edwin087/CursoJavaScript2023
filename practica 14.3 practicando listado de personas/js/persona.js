class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombree() {
    return this._nombre;
  }
  set nombree(nom) {
    this._nombre = nom;
  }
  get apellodoo() {
    return this._apellido;
  }
  set apellodoo(ape) {
    this._apellido = ape;
  }
}
