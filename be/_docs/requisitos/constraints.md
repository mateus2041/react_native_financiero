# Restricciones del Proyecto — Financiero

**Proyecto:** Financiero — App de gestión financiera personal en React Native  
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Clasificación:** Académico

---

## RC-01 — Restricciones tecnológicas

| ID | Restricción | Justificación |
|---|---|---|
| RC-01.1 | El framework obligatorio es **React Native** con **Expo SDK 55.0.15**. No se permite migrar a otro framework (Flutter, Ionic, etc.). | El propósito del proyecto es demostrar las capacidades de React Native. |
| RC-01.2 | El lenguaje es **TypeScript** en modo estricto (`"strict": true`). No se permite JavaScript puro. | Garantiza type safety y facilita el mantenimiento académico del código. |
| RC-01.3 | El único gestor de paquetes permitido es **pnpm**. No se puede usar `npm`, `yarn` ni `bun`. | Reproducibilidad de builds y auditoría de dependencias centralizada. |
| RC-01.4 | Todas las versiones de dependencias deben ser **exactas** (sin `^`, `~`, `*` ni `latest`). | Previene la introducción silenciosa de CVEs y builds no reproducibles. |
| RC-01.5 | El backend debe ser **Supabase free tier**. No se permite desplegar infraestructura propia ni usar otros BaaS. | Restricción de presupuesto académico (coste $0). |
| RC-01.6 | La navegación debe implementarse con **React Navigation v7**. No se permite Expo Router en esta versión. | El proyecto debe demostrar configuración manual de navegación. |

---

## RC-02 — Restricciones de APIs externas

| ID | Restricción | Justificación |
|---|---|---|
| RC-02.1 | Solo se pueden consumir APIs financieras gratuitas y documentadas previamente (ej: tipos de cambio, mercado bursátil público). | Control de costes y trazabilidad de datos. |
| RC-02.2 | Las APIs con clave deben usar credenciales personales almacenadas en variables de entorno. | Seguridad y separación de secretos. |
| RC-02.3 | No se permite el uso de APIs que requieran pagos, suscripción o licencias enterprise. | Mantener el proyecto en entorno académico gratuito. |
| RC-02.4 | Las respuestas de APIs externas deben cachearse para evitar sobrepasar rate limits. | Estabilidad y control de consumo. |

---

## RC-03 — Restricciones de plataforma

| ID | Restricción | Justificación |
|---|---|---|
| RC-03.1 | La prioridad de desarrollo es **Android → Web → iOS**. | Facilita validación en dispositivos disponibles. |
| RC-03.2 | En Web, las funciones sensibles (biometría, almacenamiento seguro) deben degradarse con fallback informativo. | Limitaciones del entorno web. |
| RC-03.3 | El soporte offline es obligatorio para consultas básicas (transacciones y resumen financiero). | Usabilidad en escenarios sin conexión. |
| RC-03.4 | iOS puede validarse en simulador si no hay cuenta de Apple Developer. | Restricción académica/económica. |

---

## RC-04 — Restricciones de seguridad

| ID | Restricción |
|---|---|
| RC-04.1 | Está prohibido commitear archivos `.env` o credenciales reales de APIs. |
| RC-04.2 | La app no puede procesar ni almacenar datos bancarios reales (tarjetas, CVV, credenciales bancarias). |
| RC-04.3 | Todas las comunicaciones con APIs deben usar HTTPS obligatorio. |
| RC-04.4 | Los datos financieros del usuario deben estar cifrados en reposo cuando se almacenen localmente o en Supabase. |

---

## RC-05 — Restricciones de calidad

| ID | Restricción |
|---|---|
| RC-05.1 | Cobertura mínima de tests: **80 %** por módulo. |
| RC-05.2 | No se permite merge a `main` con errores de TypeScript o lint. |
| RC-05.3 | No se aceptan `// TODO` sin issue asociado. |
| RC-05.4 | Todos los componentes, hooks y servicios deben tener documentación TSDoc (`@what / @why / @impact`). |

---

## RC-06 — Restricciones de proceso y tiempo

| ID | Restricción |
|---|---|
| RC-06.1 | Uso obligatorio de **Conventional Commits**. |
| RC-06.2 | Cada módulo debe incluir tests, documentación y ejemplos de uso. |
| RC-06.3 | El proyecto es exclusivamente académico y no puede usarse en producción financiera real. |

---

## RC-07 — Restricciones de arquitectura

| ID | Restricción |
|---|---|
| RC-07.1 | Estructura obligatoria: `src/modules/` y `src/shared/`. |
| RC-07.2 | Prohibidas importaciones cruzadas entre módulos. |
| RC-07.3 | Cliente Supabase debe ser singleton en `src/shared/lib/supabaseClient.ts`. |
| RC-07.4 | Servicios externos (APIs financieras) deben centralizarse en `src/shared/lib/` (exchangeClient, marketClient, etc.). |