# Fasttify Templates

Este repositorio contiene las plantillas para las tiendas de Fasttify. Cada plantilla está diseñada para integrarse con la plataforma utilizando un enfoque headless, permitiendo que los datos sean consumidos dinámicamente desde Strapi y Fasttify.

## 📂 Estructura del Repositorio

Cada plantilla se encuentra en su propia carpeta dentro del directorio principal del repositorio. La estructura general es la siguiente:

```
/templates
  ├── plantilla1
  │   ├── src/
  │   ├── public/
  │   ├── styles/
  │   ├── package.json
  │   ├── README.md
  ├── plantilla2
  ├── ...
```

## 🚀 Despliegue con Amplify Hosting

Las plantillas pueden estar desarrolladas en distintas tecnologías y están diseñadas para ser desplegadas en AWS Amplify Hosting. Para desplegar una plantilla:

1. Instalar las dependencias (si aplica):
   ```bash
   npm install
   ```
2. Generar la versión lista para producción (según la tecnología utilizada):
   ```bash
   npm run build
   ```
3. Subir a Amplify Hosting según la documentación oficial de Fasttify.

## 🔧 Configuración

Cada plantilla incluye un archivo `config.json` donde se pueden editar las opciones personalizadas de la tienda. Este archivo permite a los usuarios ajustar colores, fuentes, disposición de elementos y más.

Ejemplo de `config.json`:

```json
{
  "themeColor": "#ff6600",
  "font": "Roboto",
  "layout": "grid"
}
```

## 📜 Licencia

Las plantillas de este repositorio están bajo la licencia de uso de Fasttify. No se permite la distribución sin autorización previa.

---

📧 **Soporte**: Para cualquier duda o reporte de errores, contacta con el equipo de Fasttify.

