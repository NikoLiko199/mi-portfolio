let traducciones = {};

// 1. Leemos el archivo CSV descargado de Excel/Google
fetch('traducciones.csv')
  .then(response => response.text())
  .then(data => {
    traducciones = parsearCSV(data);
    const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es';
    cambiarIdioma(idiomaGuardado);
  });

// Función que convierte el texto CSV en un objeto usable
function parsearCSV(texto) {
  const lineas = texto.trim().split('\n');
  const columnas = lineas[0].split(',').map(c => c.trim().replace(/\r/g, ''));
  const resultado = {};

  // Preparamos los idiomas (es, en, pt, etc.)
  for (let i = 1; i < columnas.length; i++) {
    resultado[columnas[i]] = {};
  }

  // Llenamos las claves y sus traducciones
  for (let i = 1; i < lineas.length; i++) {
    const valores = lineas[i].split(',').map(v => v.trim().replace(/\r/g, ''));
    const clave = valores[0];

    for (let j = 1; j < columnas.length; j++) {
      if (clave && columnas[j]) {
        resultado[columnas[j]][clave] = valores[j];
      }
    }
  }
  return resultado;
}

// 2. Función para aplicar el idioma a la página
function cambiarIdioma(lang) {
  if (!traducciones[lang]) return;

  document.querySelectorAll('[data-i18n]').forEach(elemento => {
    const clave = elemento.getAttribute('data-i18n');
    if (traducciones[lang][clave]) {
      elemento.textContent = traducciones[lang][clave];
    }
  });

  localStorage.setItem('idioma_preferido', lang);
}