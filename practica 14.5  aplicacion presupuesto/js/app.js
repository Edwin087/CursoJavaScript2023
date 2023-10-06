const ingresos = [
  new Ingreso("Salario", 2100.0),
  new Ingreso("Venta Coche", 1500.0),
];
const egresos = [
  new Egreso("Renta departamento", 900),
  new Egreso("Ropa", 400),
];

let cargarApp = () => {
  cargarCabecero();
};

let totalIngresos = () => {
  let totalIngreos = 0;
  for (let ingreso of ingresos) {
    totalIngreos += ingreso.valoor;
  }
  return totalIngreos;
};

let totalEgresos = () => {
  let totalEgresos = 0;
  for (let egreso of egresos) {
    totalEgresos += egreso.valoor;
  }
  return totalEgresos;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = presupuesto;
  document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
  document.getElementById("ingresos").innerHTML = totalIngresos();
  document.getElementById("egresos").innerHTML = totalEgresos();
};

//window.addEventListener("load", cargarApp, false);
