// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario de demostración (no envía datos reales)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById('formNote');
  if(note){ note.hidden = false; }
  e.target.querySelector('button').textContent = 'Enviado ✓';
  return false;
}
