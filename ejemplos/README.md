# Ejemplos listos para ejecutar

Con Premiere Pro 2026 la plataforma es UXP. Para cargar un panel en
desarrollo se usa **UXP Developer Tool**: *Add Plugin* apuntando al
`manifest.json` de la carpeta, y después *Load*.

| Carpeta / archivo | Qué hace |
| --- | --- |
| `panel_minimo/` | Panel UXP completo y cargable: manifiesto, interfaz y lógica |
| `01_inventario_de_secuencia.js` | Recorre la secuencia activa y resume pistas y clips |

El `panel_minimo` es el punto de partida recomendado: arranca, carga y
responde, que es exactamente lo que hace falta para empezar a construir.
