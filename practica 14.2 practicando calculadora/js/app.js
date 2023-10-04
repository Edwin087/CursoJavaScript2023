function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  let resultadoo = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultadoo)) {
    resultadoo = "La operacion no incluye numeros";
  }

  document.getElementById("resultado").innerHTML = `Resultado: ${resultadoo}`;
}
