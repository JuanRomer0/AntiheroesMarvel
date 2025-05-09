# 📚 Taller: Aplicación Web para Personajes de Cómics 

Este proyecto consiste en una aplicación web *responsive* que permite visualizar, buscar y explorar personajes de cómics de manera interactiva. Diseñado para ser una práctica de integración HTML, CSS y JavaScript.

---

## 🛠️ Funcionalidades

1. **Carga automática de información**
   - Al iniciar la página, se cargan automáticamente tarjetas con información básica de cada personaje.

2. **Objeto literal por personaje**
   - Cada personaje está definido mediante un objeto que incluye:
     - `nombre`
     - `nombreClave`
     - `casa` (DC o Marvel)
     - `anio`
     - `descripcion`
     - `descripcionCompleta`

3. **Tarjetas interactivas**
   - Cada tarjeta muestra información resumida.
   - Incluye un botón **"Ver más"** que abre un modal con la descripción completa del personaje.

4. **Buscador por nombre clave**
   - Permite filtrar los personajes por su nombre clave.
   - Actualiza la vista para mostrar solo los resultados que coincidan.

---

## 💻 Tecnologías usadas

- HTML5
- CSS3 (con diseño responsive)
- JavaScript (ES6)

---

## 📂 Estructura del proyecto
ANTIHEROESMARVEL/
├── css/
│   └── styles.css               # Estilos principales de la app
│
├── data/
│   └── antiheroes.js           # Archivo con datos de personajes (objetos literales)
│
├── js/
│   ├── app.js                  # Script principal que inicializa la app
│   ├── card-components.js      # Lógica para generar las tarjetas de personajes
│   ├── modal.js                # Lógica para abrir/cerrar el modal
│   └── search-component.js     # Componente de búsqueda
│
├── sources/
│   └── imgs/
│       ├── daredevil.jpeg
│       ├── deadpool.jpeg
│       ├── domino.jpeg
│       ├── dr.strange.jpeg
│       ├── emmafrost.jpeg
│       ├── fondo.jpeg
│       ├── ghostrider.jpeg
│       ├── iconopag.jpeg       # Icono de la página (favicon)
│       ├── moonknight.jpeg
│       ├── punisher.jpeg
│       └── spawn.jpeg
│
├── index.html                  # Archivo HTML principal

## 💻 Link Pagina web

https://symphonious-fairy-d93101.netlify.app/

