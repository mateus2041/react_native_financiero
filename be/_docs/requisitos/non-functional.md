# Requisitos No Funcionales — Financiero

**Proyecto:** Financiero — sistema bancario enfocado en necesidades básicas del usuario  
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## RNF-01 — Rendimiento

| ID | Requisito | Métrica |
|---|---|---|
| RNF-01.1 | La pantalla principal (Dashboard) debe renderizarse en menos de 2 segundos en dispositivos móviles de gama media (≥ 2 GB RAM). | Tiempo de renderizado ≤ 2 s |
| RNF-01.2 | Las listas de movimientos y transacciones deben mantener al menos 60 fps durante el scroll. | FPS ≥ 60 |
| RNF-01.3 | Las animaciones críticas (transferencias, confirmaciones, tarjetas) deben ejecutarse sin bloquear el hilo principal. | UI thread no bloqueado |
| RNF-01.4 | Las consultas a APIs financieras no deben superar 3 segundos; de lo contrario se debe mostrar estado de carga con opción de reintento. | Timeout ≤ 3 s |
| RNF-01.5 | La actualización de saldo tras una transacción debe reflejarse en la UI en menos de 1 segundo. | Latencia UI ≤ 1 s |

---

## RNF-02 — Disponibilidad y confiabilidad

| ID | Requisito |
|---|---|
| RNF-02.1 | El sistema debe ser funcional en modo offline para datos previamente cacheados (saldos, movimientos recientes). |
| RNF-02.2 | Al detectar pérdida de conexión, el sistema debe mostrar un indicador no intrusivo y deshabilitar solo funciones dependientes de red. |
| RNF-02.3 | El sistema debe mantener consistencia de datos al reconectar, resolviendo conflictos de sincronización de forma segura. |
| RNF-02.4 | Las operaciones financieras deben ser idempotentes para evitar duplicación de transacciones. |

---

## RNF-03 — Seguridad

| ID | Requisito |
|---|---|
| RNF-03.1 | Las credenciales de Supabase deben almacenarse únicamente en variables de entorno y nunca en el código fuente. |
| RNF-03.2 | Todas las tablas en Supabase deben tener Row Level Security (RLS) habilitado desde su creación. |
| RNF-03.3 | La service_role key no debe utilizarse en el cliente bajo ninguna circunstancia. |
| RNF-03.4 | Los tokens de sesión deben almacenarse en almacenamiento seguro del sistema (Keychain / Keystore o equivalente). |
| RNF-03.5 | Las dependencias deben auditarse antes de cada build; no se permiten vulnerabilidades moderate, high o critical en producción. |
| RNF-03.6 | Las operaciones sensibles deben requerir reautenticación o verificación adicional (PIN/biometría). |

---

## RNF-04 — Mantenibilidad

| ID | Requisito |
|---|---|
| RNF-04.1 | La cobertura de tests debe ser ≥ 80% por módulo. |
| RNF-04.2 | Todo componente, hook o función debe documentarse con TSDoc (`@what / @why / @impact`). |
| RNF-04.3 | No se permite `any`, `@ts-ignore` o `eslint-disable` sin justificación documentada. |
| RNF-04.4 | Todas las dependencias deben tener versiones exactas (sin `^`, `~`, `*`, `latest`). |
| RNF-04.5 | El código debe seguir arquitectura modular con separación estricta entre UI, lógica y servicios. |

---

## RNF-05 — Usabilidad y accesibilidad

| ID | Requisito |
|---|---|
| RNF-05.1 | Todos los elementos interactivos deben tener `accessibilityLabel` y `accessibilityRole`. |
| RNF-05.2 | El contraste visual debe cumplir WCAG 2.1 nivel AA (≥ 4.5:1). |
| RNF-05.3 | El sistema debe soportar modo claro y oscuro según configuración del dispositivo. |
| RNF-05.4 | Los elementos táctiles deben tener un tamaño mínimo de 44×44 dp. |
| RNF-05.5 | Los mensajes de error deben ser claros, en español y orientados a la acción. |

---

## RNF-06 — Compatibilidad de plataformas

| ID | Requisito |
|---|---|
| RNF-06.1 | El sistema debe funcionar en Android API 24+ (Android 7.0 o superior). |
| RNF-06.2 | La versión web debe ser compatible con Chrome ≥ 110, Firefox ≥ 110 y Safari ≥ 16. |
| RNF-06.3 | La versión iOS debe funcionar en iOS 15.1 o superior. |
| RNF-06.4 | Las funcionalidades no disponibles en alguna plataforma deben degradarse de forma segura sin crash. |

---

## RNF-07 — Escalabilidad y límites

| ID | Requisito |
|---|---|
| RNF-07.1 | El sistema debe minimizar llamadas a APIs externas mediante caching inteligente. |
| RNF-07.2 | Debe manejar correctamente errores de rate limit (HTTP 429) mostrando mensajes amigables. |
| RNF-07.3 | El sistema debe respetar los límites del plan free tier de Supabase (almacenamiento y tráfico). |
| RNF-07.4 | El crecimiento de datos financieros debe ser monitoreado y advertido al usuario cuando se acerque a límites del sistema. |

---

## RNF-08 — Calidad de código y proceso

| ID | Requisito |
|---|---|
| RNF-08.1 | El proyecto debe pasar ESLint y TypeScript sin errores antes de cada commit. |
| RNF-08.2 | Los commits deben seguir Conventional Commits con descripción clara. |
| RNF-08.3 | El único gestor de paquetes permitido es pnpm. |
| RNF-08.4 | No se permite deuda técnica acumulada (TODO sin issue, código roto o sin pruebas). |
| RNF-08.5 | Todo bug detectado debe corregirse antes de continuar con nuevas funcionalidades. |