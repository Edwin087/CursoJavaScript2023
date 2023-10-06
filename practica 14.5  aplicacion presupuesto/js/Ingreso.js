class Ingreso extends Dato {
  static contadorIngresos = 0;
  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._Id = ++Ingreso.contadorIngresos;
  }
  get id() {
    return this._Id;
  }
}
