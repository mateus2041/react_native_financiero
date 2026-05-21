# Restricciones del Proyecto — Financiero

**Proyecto:** Financiero — un proyecto que el apuntamos a las nesidades del usurio  básica en React Native 
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## RC-01 — Restricciones tecnológicas

| ID | Restricción | Justificación |
|---|---|---|
| RC-01.1 | El framework obligatorio es **FastAPI**. No se permite migrar a otro framework (Flutter, Ionic, etc.). | El propósito del proyecto es demostrar las capacidades de FastAPI en el bakend y el react en el frontend. |
| RC-01.2 | El lenguaje es **flash api** en modo estricto (`"from": flastapi import FastAPI, depends, HHTTPException"`). No se permite JavaScript puro. | Garantisa la coneccion de la base de datos y la infomacion enviada y facilita el mantenimiento académico del código. |
| RC-01.3 | El único gestor de paquetes del permitido es **pnpm*. No se puede usar `npm`, `yarn` ni `bun`. | Reproducibilidad de builds y auditoría de dependencias centralizada. |
| RC-01.4 | Todas las versiones de dependencias deben ser **exactas** para eviatar la instalacion de pakdependencias (sin `^`, `~`, `*` ni `latest`). | Previene la introducción silenciosa de CVEs y builds no reproducibles en el banco. |
| RC-01.5 | El backend del sistema debe implementarse utilizando FastAPI (Python) en arquitectura de servicios. No se permite desplegar infraestructura propia ni utilizar otros Backend-as-a-Service (BaaS). | Restricción de presupuesto académico (coste $0) y estandarización del backend para el proyecto financiero. |
| RC-01.6 | La navegación debe implementarse con **React**. No se permite Expo Router en esta versión. | El showcase debe demostrar explícitamente la configuración manual de navegación. |

---

## RC-02 — Restricciones de APIs externas

| ID | Restricción | Justificación |
|---|---|---|
| RC-02.1 | Solo se pueden consumir APIs financieras o de datos simulados documentadas previamente (por ejemplo: conversión de moneda, datos demo bancarios o servicios públicos    ). Cualquier API adicional debe ser gratuita, segura y aprobada antes de integrarse. | Control de costes, seguridad y consistencia en el dominio financiero. |
| RC-02.2 | La API key debe ser personal y registrada en variables de entorno. DEMO_KEY solo se admite en desarrollo local, nunca en commits con tests de integración. | La API key debe ser personal y registrada en variables de entorno. DEMO_KEY solo se admite en desarrollo local, nunca en commits con tests de integración.  |
| RC-02.3 | Las peticiones a APIs externas deben manejar errores, timeouts y reintentos controlados. | Las operaciones financieras requieren resiliencia ante fallos de red. |
| RC-02.4 | El rango máximo de consulta en APIs financieras o de datos simulados es definido por la propia API externa. La app no puede solicitar rangos superiores a los permitidos | RRestricción impuesta por los proveedores de datos, no modificable. |

---

## RC-03 — Restricciones de plataforma

| ID | Restricción | Justificación |
|---|---|---|
| RC-03.1 | La prioridad de desarrollo es **Web**. Las funcionalidades deben verificarse en Web antes de adaptarse al cualquier pagina web. | Disponibilidad de dispositivos y emuladores de la vista web. |
| RC-03.2 | Los módulos que requieren hardware  (solo el premiso de no olvidar l contraseña). | Los navegadores tienen acceso limitado o diferente a APIs de hardware. |
| RC-03.3 | Las funciones avanzadas del sistema bancario (como autenticación biométrica o validación de identidad) se consideran opcionalmente dependientes de plataforma (stretch goal). Su ausencia no bloquea la entrega. | Priorización de funcionalidades core como cuentas, transferencias y consulta de saldo. |

---

## RC-04 — Restricciones de seguridad

| ID | Restricción |
|---|---|
| RC-04.1 | Los archivos `.env`, `.env.local` y cualquier variante **no deben commitearse** al repositorio. El `.gitignore` ya los excluye. |
| RC-04.2 | No se puede publicar el sistema financiero web en Google Play ni App Store en su forma actual (showcase con credenciales o claves de desarrollo) ||
| RC-04.3 |El sistema bancario web no debe almacenar datos personales reales de terceros; solo datos del usuario autenticado o información simulada para fines académicos. |

---

## RC-05 — Restricciones de calidad

| ID | Restricción |
|---|---|
| RC-05.1 | La cobertura de tests no puede bajar del 80% de líneas y ramas por módulo en el sistema bancario web. Si baja, el commit queda bloqueado. |
| RC-05.2 | No se puede hacer merge a main con errores de TypeScript (pnpm tsc --noEmit) ni de ESLint (pnpm lint). |

---

## RC-06 — Restricciones de proceso y tiempo

| ID | Restricción |
|---|---|
| RC-06.1 | El proyecto sigue el formato **Conventional Commits** con cuerpo pedagógico. Commits sin este formato serán rechazados en la revisión académica. |
| RC-06.2 | Cada módulo debe entregarse con su documentación y tests; no se aceptan módulos "en construcción" en la entrega final. |
| RC-06.3 | El proyecto es **académico y sin fines comerciales**. El uso de las APIs gratuitas de NASA y Solar System OpenData está sujeto a sus respectivos términos de uso. |

---

## RC-07 — Restricciones de arquitectura

| ID | Restricción |
|---|---|
| RC-07.1 | La estructura de carpetas definida en `copilot-instructions.md` (`src/modules/`, `src/shared/`) es obligatoria y no puede modificarse sin revisión del equipo. |
| RC-07.2 | No se permiten importaciones cruzadas entre módulos (`src/modules/auth` no puede importar de `src/modules/maps`). Toda lógica compartida va en `src/shared/`. |
| RC-07.3 | El cliente Supabase debe ser una instancia singleton en `src/shared/lib/supabaseClient.ts`. No se puede instanciar en otros lugares. |
| RC-07.4 | Los clientes HTTP de las APIs astronómicas deben centralizarse en `src/shared/lib/` (nasaClient, solarSystemClient, issClient). No se permiten `fetch` directos a las APIs en los módulos. |