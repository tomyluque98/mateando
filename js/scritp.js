document.getElementById('origen').addEventListener('change', function () {
  const especifique = document.getElementById('especifique-container');
  especifique.style.display = this.value === 'otro' ? 'block' : 'none';
});

document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensaje enviado');
});
