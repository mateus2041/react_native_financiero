# Restricciones del Proyecto — Financiero 

**Proyecto:** Financiero Web — aplicación bancaria web orientada a necesidades básicas del usuario  
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## RC-01 — Restricciones tecnológicas

| ID | Restricción | Justificación |
|---|---|---|
| RC-01.1 | El framework obligatorio es **React 19** con **Vite 7**. No se permite migrar a otro framework (Angular, Vue, Svelte, etc.). | El propósito del proyecto es demostrar las capacidades de React moderno en una app bancaria web. |
| RC-01.2 | El lenguaje es **TypeScript** en modo estricto (`"strict": true`). No se permite JavaScript puro. | Garantiza type safety y facilita el mantenimiento académico del código. |
| RC-01.3 | El único gestor de paquetes permitido es **pnpm**. No se puede usar `npm`, `yarn` ni `bun`. | Reproducibilidad de builds y auditoría de dependencias centralizada. |
| RC-01.4 | Todas las versiones de dependencias deben ser **exactas** (sin `^`, `~`, `*` ni `latest`). | Previene la introducción silenciosa de CVEs y builds no reproducibles. |
| RC-01.5 | El backend debe ser **Supabase free tier**. No se permite desplegar infraestructura propia ni usar otros BaaS. | Restricción de presupuesto académico (coste $0). |
| RC-01.6 | La navegación debe implementarse con **React Router DOM v7**. No se permite Next.js Router ni otros sistemas de routing. | El proyecto debe demostrar configuración manual de navegación en React Web. |
| RC-01.7 | El sistema de estilos obligatorio es **Tailwind CSS v4**. No se permite Bootstrap ni frameworks CSS completos. | Mantener consistencia visual y enfoque utility-first moderno. |

---

## RC-02 — Restricciones de APIs externas

| ID | Restricción | Justificación |
|---|---|---|
| RC-02.1 | Solo se pueden consumir APIs financieras o de datos simulados documentadas previamente. Cualquier API adicional debe ser gratuita y aprobada antes de integrarse. | Control de costes y seguridad del sistema bancario. |
| RC-02.2 | Las claves de API deben ser personales y almacenadas en variables de entorno. No se permite exponer credenciales en el repositorio. | Protección de información sensible del sistema financiero. |
| RC-02.3 | Todas las peticiones a APIs externas deben implementar manejo de errores, timeouts y reintentos controlados. | Garantizar resiliencia en operaciones bancarias críticas. |
| RC-02.4 | No se permite integrar APIs que procesen dinero real o transacciones en producción. | Proyecto estrictamente académico. |
| RC-02.5 | Todas las llamadas HTTP deben centralizarse mediante clientes reutilizables (`axios` o wrappers de `fetch`). | Evitar duplicación de lógica y mejorar mantenibilidad. |

---

## RC-03 — Restricciones de plataforma

| ID | Restricción | Justificación |
|---|---|---|
| RC-03.1 | La prioridad de desarrollo es **Desktop → Tablet → Mobile**. Las funcionalidades deben validarse primero en Chrome Desktop. | Disponibilidad de dispositivos y navegadores del equipo académico. |
| RC-03.2 | Las funcionalidades dependientes del navegador (notificaciones, biometría, almacenamiento seguro) no son obligatorias en todos los navegadores y deben incluir fallback informativo o deshabilitado. | Limitaciones de compatibilidad entre navegadores modernos. |
| RC-03.3 | Las funciones avanzadas de seguridad (WebAuthn, biometría, validación de identidad) pueden considerarse **stretch goal**. | Priorización de funcionalidades core del banco. |
| RC-03.4 | Safari y Firefox son soporte secundario. El entorno principal de validación es Chromium. | Restricción académica de tiempo y QA multiplataforma. |
| RC-03.5 | La aplicación debe ser responsive desde un ancho mínimo de **360px**. | Compatibilidad mínima con dispositivos móviles modernos. |

---

## RC-04 — Restricciones de seguridad

| ID | Restricción |
|---|---|
| RC-04.1 | Los archivos `.env`, `.env.local` y variantes no deben ser commiteados. |
| RC-04.2 | No se permite publicar la app con credenciales de desarrollo o datos simulados sensibles. |
| RC-04.3 | Ninguna vulnerabilidad CVE de nivel moderate, high o critical puede llegar a `main` sin mitigación documentada. |
| RC-04.4 | El sistema bancario no debe almacenar datos personales reales de terceros; solo datos del usuario autenticado o simulados. |
| RC-04.5 | Todas las rutas privadas deben validar autenticación antes de renderizar contenido sensible. |
| RC-04.6 | No se permite almacenar tokens sensibles en `localStorage` sin justificación documentada. |

---

## RC-05 — Restricciones de calidad

| ID | Restricción |
|---|---|
| RC-05.1 | La cobertura de tests no puede bajar del **80%** por módulo. |
| RC-05.2 | No se permite merge a `main` con errores de TypeScript (`pnpm tsc --noEmit`) ni ESLint (`pnpm lint`). |
| RC-05.3 | No se permiten `// TODO` sin issue asociado. |
| RC-05.4 | Cada función, hook y componente debe incluir documentación TSDoc (`@what / @why / @impact`). |
| RC-05.5 | Todos los formularios deben implementar validación tipada con Zod o equivalente. |
| RC-05.6 | Los componentes visuales no deben contener lógica de negocio compleja. |

---

## RC-06 — Restricciones de proceso y tiempo

| ID | Restricción |
|---|---|
| RC-06.1 | Uso obligatorio de **Conventional Commits** con explicación clara. |
| RC-06.2 | Cada módulo debe entregarse completo con tests y documentación. |
| RC-06.3 | Proyecto estrictamente académico sin fines comerciales. |
| RC-06.4 | Cada Pull Request debe incluir evidencia visual de la funcionalidad implementada. |

---

## RC-07 — Restricciones de arquitectura

| ID | Restricción |
|---|---|
| RC-07.1 | La estructura de carpetas definida en `src/modules/` y `src/shared/` es obligatoria. |
| RC-07.2 | No se permiten importaciones cruzadas entre módulos. La lógica compartida va en `src/shared/`. |
| RC-07.3 | El cliente Supabase debe ser singleton en `src/shared/lib/supabaseClient.ts`. |
| RC-07.4 | Las llamadas a APIs financieras deben centralizarse en `src/shared/lib/` (`bankingClient`, `authClient`, `transactionsClient`). No se permiten llamadas HTTP directas en módulos. |
| RC-07.5 | La lógica compartida de UI debe ubicarse exclusivamente en `src/shared/components/`. |
| RC-07.6 | Cada módulo debe separar `components`, `hooks`, `services`, `types` y `pages`. |
| RC-07.7 | Las configuraciones globales deben centralizarse en `src/shared/config/`. |