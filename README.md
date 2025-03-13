# Fasttify Templates

Este repositorio contiene las plantillas para las tiendas de Fasttify. Cada plantilla está diseñada para integrarse con la plataforma utilizando un enfoque headless, permitiendo que los datos sean consumidos dinámicamente desde Strapi y Fasttify.

## 📂 Estructura del Repositorio

Cada plantilla se encuentra en su propia carpeta dentro del directorio principal del repositorio. La estructura general es la siguiente:

```
/templates
  ├── plantilla1
  │   ├── src/          # Código fuente de la plantilla
  │   ├── public/       # Recursos estáticos (imágenes, fuentes, etc.)
  │   ├── styles/       # Archivos de estilos CSS o frameworks (Tailwind, SASS, etc.)
  │   ├── config.json   # Archivo de configuración editable por el usuario
  │   ├── package.json  # Dependencias y scripts
  │   ├── README.md     # Documentación específica de la plantilla
  ├── plantilla2
  ├── ...
```

## 🚀 Tecnologías Soportadas

Las plantillas en este repositorio pueden estar desarrolladas en distintas tecnologías, dependiendo del nivel de personalización y la experiencia del usuario final:

- **Liquid**: Para plantillas altamente personalizables que se renderizan en el servidor.
- **Next.js**: Para tiendas con renderizado dinámico o estático, permitiendo una mayor flexibilidad.
- **React/Vue**: Para interfaces interactivas y dinámicas, ideales para tiendas más avanzadas.
- **HTML, CSS, JavaScript**: Para tiendas más simples y rápidas sin necesidad de frameworks complejos.

Cada plantilla incluirá un `README.md` con detalles específicos sobre la tecnología utilizada y las instrucciones de configuración.

## 🏗️ Flujo de Trabajo y Personalización

### 1️⃣ Configuración de la plantilla
Cada plantilla incluye un archivo `config.json`, que permite personalizar la apariencia y funcionalidades sin modificar el código.

Ejemplo de `config.json`:
```json
{
  "themeEngine": "liquid",
  "themeColor": "#ff6600",
  "font": "Roboto",
  "layout": "grid"
}
```

Los cambios en este archivo serán reflejados automáticamente en la tienda sin necesidad de despliegues adicionales.

### 2️⃣ Integración con Fasttify
Las plantillas están diseñadas para consumir datos de Fasttify mediante APIs REST o GraphQL. Cada plantilla debe incluir un archivo de configuración donde se definen los endpoints para obtener productos, categorías y configuración del usuario.

Ejemplo de conexión con Fasttify desde JavaScript:
```js
fetch("https://api.fasttify.com/products")
  .then(response => response.json())
  .then(data => console.log(data));
```

Para Liquid, se pueden usar variables dinámicas:
```liquid
{% for product in products %}
  <h2>{{ product.name }}</h2>
  <p>Precio: {{ product.price }}</p>
{% endfor %}
```

### 3️⃣ Despliegue en Amplify Hosting
Las plantillas pueden estar desarrolladas en distintas tecnologías y están diseñadas para ser desplegadas en AWS Amplify Hosting. Para desplegar una plantilla:

1. Clonar el repositorio y acceder a la plantilla deseada:
   ```bash
   git clone https://github.com/Fasttify/Templates1.git
   cd Templates1/templates/plantilla1
   ```
2. Instalar dependencias (si aplica):
   ```bash
   npm install
   ```
3. Construir la plantilla para producción:
   ```bash
   npm run build
   ```
4. Subir la plantilla a AWS Amplify según la documentación de Fasttify.

## 📜 Licencia

Las plantillas de este repositorio están bajo la licencia de uso de Fasttify. No se permite la distribución sin autorización previa.

---

📧 **Soporte**: Para cualquier duda o reporte de errores, contacta con el equipo de Fasttify.

