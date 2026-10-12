# 🎮 GameReact — Tienda Digital de Videojuegos

> **Nota:** Este proyecto corresponde a una **Preentrega** del curso de **React JS**.

GameReact es una plataforma web moderna de comercio electrónico especializada en la venta digital de videojuegos, diseñada con una estética inmersiva y futurista (tema oscuro con acentos neón), componentes reutilizables y navegación fluida entre vistas.

---

## 🚀 Tecnologías Utilizadas

- **React (v19)** — Librería principal de interfaz de usuario.
- **React Router DOM (v7)** — Enrutamiento y navegación dinámica (`/`, `/cart`, `/games/:id`).
- **Vite** — Entorno de desarrollo rápido y empaquetador.
- **CSS3 / Vanilla CSS** — Estilos globales personalizados y adaptados para temática gaming.

---

## ✨ Características Principales

- **Catálogo de Juegos:** Listado interactivo de videojuegos obtenidos desde una fuente de datos JSON local.
- **Detalle de Producto Dinámico:** Vistas individuales para cada juego mediante rutas dinámicas con parámetros (`:id`).
- **Gestión de Carrito de Compras (`CartContext`):** Contexto global para agregar, eliminar y calcular totales con persistencia durante la navegación.
- **Cálculo Unificado de Precios:** Helper centralizado (`src/utils/price.js`) para manejar descuentos porcentuales y formateo de moneda de manera consistente.
- **Manejo de Estados de Carga y Errores:** Retroalimentación visual mientras se consumen los datos del catálogo y detalles.

---

## 🛠️ Consideraciones del Proyecto

- Los datos de los videojuegos se cargan de forma asincrónica desde un archivo estático ubicado en `public/data/games.json`.
- Las imágenes de los juegos se organizan en la carpeta `/img/games/`.
- El flujo del carrito valida la existencia de ítems para evitar duplicados en esta versión preliminar.

---

## 📦 Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd TP-Final-CristianAnito
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Ingresá a `http://localhost:5173` (o el puerto que indique tu terminal).
