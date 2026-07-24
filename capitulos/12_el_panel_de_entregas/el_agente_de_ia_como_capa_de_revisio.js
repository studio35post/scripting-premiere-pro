// ai-inspector.js
import { callLLM } from './llm-client.js';

export async function inspectDelivery(report) {
  const prompt = buildPrompt(report);
  const raw    = await callLLM(prompt);

  try {
    return JSON.parse(raw);
  } catch {
    // Si el modelo no devolvió JSON válido, se devuelve un objeto neutro
    return { issues: [], summary: raw, needsRedelivery: false };
  }
}

function buildPrompt(report) {
  return `Eres un supervisor técnico de postproducción. Analiza el siguiente informe de entrega \
y detecta cualquier problema que deba revisarse antes de enviar los materiales al cliente.

INFORME:
${JSON.stringify(report, null, 2)}

Responde EXCLUSIVAMENTE con un objeto JSON válido con esta estructura:
{
  "issues": [
    {
      "severity": "error" | "warning" | "info",
      "field": "campo o aspecto del informe",
      "description": "descripción del problema",
      "suggestion": "cómo resolverlo"
    }
  ],
  "summary": "resumen ejecutivo en una oración",
  "needsRedelivery": true | false
}

No incluyas texto fuera del JSON.`;
}
