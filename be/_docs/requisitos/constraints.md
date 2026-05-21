# Restricciones del Proyecto — Financiero

**Proyecto:** Financiero — aplicación bancaria en React Native orientada a necesidades básicas del usuario  
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## RC-01 — Restricciones tecnológicas

| ID | Restricción | Justificación |
|---|---|---|
| RC-01.1 | El framework obligatorio es **React Native** con **Expo SDK 55.0.15**. No se permite migrar a otro framework (Flutter, Ionic, etc.). | El propósito del proyecto es demostrar las capacidades de React Native en una app bancaria. |
| RC-01.2 | El lenguaje es **TypeScript** en modo estricto (`"strict": true`). No se permite JavaScript puro. | Garantiza type safety y facilita el mantenimiento académico del código. |
| RC-01.3 | El único gestor de paquetes permitido es **pnpm**. No se puede usar `npm`, `yarn` ni `bun`. | Reproducibilidad de builds y auditoría de dependencias centralizada. |
| RC-01.4 | Todas las versiones de dependencias deben ser **exactas** (sin `^`, `~`, `*` ni `latest`). | Previene la introducción silenciosa de CVEs y builds no reproducibles. |
| RC-01.5 | El backend debe ser **Supabase free tier**. No se permite desplegar infraestructura propia ni usar otros BaaS. | Restricción de presupuesto académico (coste $0). |
| RC-01.6 | La navegación debe implementarse con **React Navigation v7**. No se permite Expo Router en esta versión. | El proyecto debe demostrar configuración manual de navegación en React Native. |

---

## RC-02 — Restricciones de APIs externas

| ID | Restricción | Justificación |
|---|---|---|
| RC-02.1 | Solo se pueden consumir APIs financieras o de datos simulados documentadas previamente. Cualquier API adicional debe ser gratuita y aprobada antes de integrarse. | Control de costes y seguridad del sistema bancario. |
| RC-02.2 | Las claves de API deben ser personales y almacenadas en variables de entorno. No se permite exponer credenciales en el repositorio. | Protección de información sensible del sistema financiero. |
| RC-02.3 | Todas las peticiones a APIs externas deben implementar manejo de errores, timeouts y reintentos controlados. | Garantizar resiliencia en operaciones bancarias críticas. |
| RC-02.4 | No se permite integrar APIs que procesen dinero real o transacciones en producción. | Proyecto estrictamente académico. |

---

## RC-03 — Restricciones de plataforma

| ID | Restricción | Justificación |
|---|---|---|
| RC-03.1 | La prioridad de desarrollo es **Android → Web → iOS**. Las funcionalidades deben validarse primero en Android. | Disponibilidad de dispositivos del equipo académico. |
| RC-03.2 | Los módulos que dependen de hardware nativo (cámara, biometría, sensores) **no son obligatorios en Web** y deben incluir fallback informativo o deshabilitado. | Limitaciones del navegador para funciones sensibles bancarias. |
| RC-03.3 | Las funciones avanzadas de seguridad (biometría, validación de identidad) pueden considerarse **stretch goal**. | Priorización de funcionalidades core del banco. |
| RC-03.4 | iOS requiere cuenta de Apple Developer para pruebas en dispositivo físico. Si no se dispone, se valida en simulador. | Restricción económica y de acceso a Apple. |

---

## RC-04 — Restricciones de seguridad

| ID | Restricción |
|---|---|
| RC-04.1 | Los archivos `.env`, `.env.local` y variantes no deben ser commiteados. |
| RC-04.2 | No se permite publicar la app en stores con credenciales de desarrollo o datos simulados sensibles. |
| RC-04.3 | Ninguna vulnerabilidad CVE de nivel moderate, high o critical puede llegar a `main` sin mitigación documentada. |
| RC-04.4 | El sistema bancario no debe almacenar datos personales reales de terceros; solo datos del usuario autenticado o simulados. |

---

## RC-05 — Restricciones de calidad

| ID | Restricción |
|---|---|
| RC-05.1 | La cobertura de tests no puede bajar del **80%** por módulo. |
| RC-05.2 | No se permite merge a `main` con errores de TypeScript (`pnpm tsc --noEmit`) ni ESLint (`pnpm lint`). |
| RC-05.3 | No se permiten `// TODO` sin issue asociado. |
| RC-05.4 | Cada función, hook y componente debe incluir documentación TSDoc (`@what / @why / @impact`). |

---

## RC-06 — Restricciones de proceso y tiempo

| ID | Restricción |
|---|---|
| RC-06.1 | Uso obligatorio de **Conventional Commits** con explicación clara. |
| RC-06.2 | Cada módulo debe entregarse completo con tests y documentación. |
| RC-06.3 | Proyecto estrictamente académico sin fines comerciales. |

---

## RC-07 — Restricciones de arquitectura

| ID | Restricción |
|---|---|
| RC-07.1 | La estructura de carpetas definida en `src/modules/` y `src/shared/` es obligatoria. |
| RC-07.2 | No se permiten importaciones cruzadas entre módulos. La lógica compartida va en `src/shared/`. |
| RC-07.3 | El cliente Supabase debe ser singleton en `src/shared/lib/supabaseClient.ts`. |
| RC-07.4 | Las llamadas a APIs financieras deben centralizarse en `src/shared/lib/` (bankingClient, authClient, transactionsClient). No se permiten `fetch` directos en módulos. |