const personas = [new Persona("Juan", "Patitio"), new Persona("Karla", "Lara")];

function mostrarPersonas() {
  let texto = "";
  for (let persona of personas) {
    // console.log(persona);
    texto += `<li>${persona._nombre} ${persona._apellido} </li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    console.log(persona);
    mostrarPersonas();
  } else {
    alert("No hay información que agregar");
  }
}
