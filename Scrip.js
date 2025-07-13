function actualizarEstado(input, codigo) {
  const nota = parseFloat(input.value);
  const aprobado = nota >= 4.0;

  if (codigo === "MAT100" && aprobado) {
    const estado = document.getElementById("MAT101-estado");
    estado.textContent = "✅ Habilitado";
    estado.style.color = "green";
  }
}
