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
  cargarIngresos();
  cargarEgresos();
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
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};
//para dar formato moneda
let formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
//formato de porsentaje
let formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingresoo) => {
  let ingresooHTML = `
                  <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${
                      ingresoo.descripcioon
                    }</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(
                          ingresoo.valoor
                        )}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${
                                  ingresoo.idd
                                })"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
  `;
  return ingresooHTML;
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresosHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresosHTML = (egresoo) => {
  let egresosHTML = `
  <div class="elemento limpiarEstilos">
<div class="elemento_descripcion"> ${egresoo.descripcioon}</div>
<div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(egresoo.valoor)}</div>
    <div class="elemento_porcentaje">${formatoPorcentaje(
      egresoo.valoor / totalEgresos()
    )}</div>
    <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">  <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${
          egresoo.idd
        })">
          </ion-icon> </button>
    </div>
</div>
</div>`;
  return egresosHTML;
};

let eliminarEgreso = (id) => {
  let indiceEliminaar = egresos.findIndex((egreso) => egreso === id);
  egresos.splice(indiceEliminaar, 1);
  cargarCabecero();
  cargarEgresos();
};

let agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if (descripcion.value != "" && valor.value != "") {
    if (tipo.value == "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    } else if ((tipo.value = "egreso")) {
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
};

//window.addEventListener("load", cargarApp, false);
