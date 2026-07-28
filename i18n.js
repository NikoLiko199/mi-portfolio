const diccionario = {
  "titulo_pestana": {
    es: "Mi Portfolio de trabajo!",
    en: "My Work Portfolio!"
  },
  "header_titulo": {
    es: "Mi Portfolio🎨",
    en: "My Portfolio🎨"
  },
  "header_subtitulo": {
    es: "Bienvenido a mi portafolio! aqui puedes ver los trabajos en los que me especializo.",
    en: "Welcome to my portfolio! Here you can see the work I specialize in."
  },
  "menu_3d": {
    es: "Modelado 3D ▼",
    en: "3D Modeling ▼"
  },
  "menu_2d": {
    es: "Dibujo ▼",
    en: "Drawing ▼"
  },
  "sub_animacion": {
    es: "Animación",
    en: "Animation"
  },
  "sub_modelos": {
    es: "Modelos",
    en: "Models"
  },
  "sub_arte2d": {
    es: "Arte 2D",
    en: "2D Art"
  },
  "menu_musica": {
    es: "🎵Música",
    en: "🎵Music"
  },
  "menu_actor": {
    es: "🎤Actor de voz ▼",
    en: "🎤Voice Actor ▼"
  },
  "sub_videojuegos": {
    es: "Videojuegos🎮",
    en: "Video Games🎮"
  },
  "sub_animaciones": {
    es: "Animaciones🎨",
    en: "Animations🎨"
  },
  "sub_series": {
    es: "Series📃📺",
    en: "Shows / Series📃📺"
  },
  "sub_covers": {
    es: "Covers🎤",
    en: "Covers🎤"
  },
  "menu_proyectos": {
    es: "Proyectos ▼",
    en: "Projects ▼"
  },
  "sub_terminados": {
    es: "Terminados✅",
    en: "Completed✅"
  },
  "sub_progreso": {
    es: "En progreso",
    en: "In progress"
  }
};

// Función para intercambiar el idioma
function cambiarIdioma(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const clave = element.getAttribute('data-i18n');
    if (diccionario[clave] && diccionario[clave][lang]) {
      element.textContent = diccionario[clave][lang];
    }
  });
  localStorage.setItem('idioma_preferido', lang);
}

// Cargar idioma guardado o español por defecto
const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es';
cambiarIdioma(idiomaGuardado);