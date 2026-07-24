Construye una extensión UXP para Premiere Pro que:
1. Lea todos los clips de video del proyecto activo
2. Los valide contra estas especificaciones: [PEGAR PROJECT_SPEC]
3. Cree tres bins ([APROBADO], [PENDIENTE], [RECHAZADO]) si no existen
4. Mueva cada clip al bin correspondiente según el resultado de validación
5. Muestre un resumen en el panel: X aprobados, Y pendientes, Z rechazados

Requisitos técnicos:
- UXP moderno (no CEP/ExtendScript)
- Procesar en lotes de 8 para no saturar el host
- Configuración de especificación externalizada en config/spec.json
- Modo estricto configurable (rechazar automáticamente vs. alertar)

Entrega: manifest.json, index.html, index.js,
         config/spec.json, utils/binManager.js, utils/validator.js
