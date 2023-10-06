class Dato {
  constructor(descripcion, valor) {
    this._descripcion = descripcion;
    this._valor = valor;
  }
  get descripcioon() {
    return this._descripcion;
  }
  set descripcioon(descrip) {
    this._descripcion = descrip;
  }
  get valoor() {
    return this._valor;
  }
  set valoor(val) {
    this._valor = val;
  }
}
