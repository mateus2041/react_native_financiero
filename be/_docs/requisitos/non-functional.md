# Requisitos No Funcionales — FinancieroMD

**Proyecto:** FinancieroMD — App de gestión financiera personal en React Native  
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Clasificación:** Académico

---

## RNF-01 — Rendimiento

| ID | Requisito | Métrica |
|---|---|---|
| RNF-01.1 | La pantalla de inicio (resumen financiero) debe renderizarse en menos de 2 segundos en dispositivos Android de gama media (≥ 2 GB RAM). | Tiempo ≤ 2 s |
| RNF-01.2 | Las listas de transacciones deben mantener un rendimiento fluido durante el scroll. | ≥ 60 fps |
| RNF-01.3 | Los cálculos de balance total deben actualizarse en tiempo real sin bloquear la UI. | UI thread no bloqueado |
| RNF-01.4 | Las consultas a APIs externas o Supabase no deben superar 3 segundos; si ocurre, se debe mostrar estado de carga y opción de reintento. | Timeout ≤ 3 s |
| RNF-01.5 | Los gráficos financieros deben renderizarse en menos de 1.5 segundos para datasets de hasta 12 meses. | Render ≤ 1.5 s |

---

## RNF-02 — Disponibilidad offline

| ID | Requisito |
|---|---|
| RNF-02.1 | La app debe permitir consultar transacciones y categorías en modo offline mediante caché local. |
| RNF-02.2 | El sistema debe permitir registrar transacciones offline y sincronizarlas cuando vuelva la conexión. |
| RNF-02.3 | Debe mostrarse un indicador de estado de conexión cuando la app esté sin internet. |
| RNF-02.4 | La caché debe persistir entre sesiones usando almacenamiento seguro. |

---

## RNF-03 — Seguridad

| ID | Requisito |
|---|---|
| RNF-03.1 | No se deben almacenar datos bancarios reales (tarjetas, CVV, credenciales bancarias). |
| RNF-03.2 | Todas las credenciales de Supabase deben almacenarse en variables de entorno `.env` y nunca en el repositorio. |
| RNF-03.3 | Las sesiones de usuario deben almacenarse en `expo-secure-store`, nunca en almacenamiento no cifrado. |
| RNF-03.4 | Todas las comunicaciones deben realizarse mediante HTTPS obligatorio. |
| RNF-03.5 | Row Level Security (RLS) debe estar habilitado en todas las tablas de Supabase desde el inicio. |
| RNF-03.6 | El sistema debe bloquear intentos de acceso tras múltiples fallos de autenticación consecutivos. |

---

## RNF-04 — Mantenibilidad

| ID | Requisito |
|---|---|
| RNF-04.1 | La cobertura de tests debe ser ≥ 80 % por módulo. |
| RNF-04.2 | Todo componente, hook o servicio debe documentarse con TSDoc (`@what / @why / @impact`). |
| RNF-04.3 | No se permite el uso de `any`, `@ts-ignore` o `eslint-disable` sin justificación formal e issue asociado. |
| RNF-04.4 | Las dependencias deben tener versiones exactas sin `^`, `~`, `*` ni `latest`. |
| RNF-04.5 | El código debe seguir arquitectura modular estricta con separación entre `modules/` y `shared/`. |

---

## RNF-05 — Usabilidad y accesibilidad

| ID | Requisito |
|---|---|
| RNF-05.1 | Todos los elementos interactivos deben incluir `accessibilityLabel` y `accessibilityRole`. |
| RNF-05.2 | La aplicación debe cumplir WCAG 2.1 nivel AA en contraste (≥ 4.5:1). |
| RNF-05.3 | Debe existir soporte completo para modo claro y oscuro según el sistema. |
| RNF-05.4 | Los elementos táctiles deben tener un mínimo de 44×44 dp. |
| RNF-05.5 | Los mensajes de error deben ser claros, en español y orientados a solución. |

---

## RNF-06 — Compatibilidad de plataformas

| ID | Requisito |
|---|---|
| RNF-06.1 | La app debe funcionar en Android API 24+ (Android 7.0). |
| RNF-06.2 | La versión web debe ser compatible con Chrome ≥ 110, Firefox ≥ 110 y Safari ≥ 16. |
| RNF-06.3 | La versión iOS debe funcionar en iOS 15.1+ (Expo SDK 55). |
| RNF-06.4 | Las funcionalidades no disponibles en alguna plataforma deben degradarse sin crash. |

---

## RNF-07 — Escalabilidad y datos

| ID | Requisito |
|---|---|
| RNF-07.1 | El sistema debe soportar al menos 1000 transacciones por usuario sin degradación visible. |
| RNF-07.2 | Las consultas a Supabase deben optimizarse con índices en campos de fecha, categoría y usuario. |
| RNF-07.3 | El sistema debe controlar el crecimiento de datos y advertir si se acerca al límite del plan free tier. |
| RNF-07.4 | El sistema debe implementar caché para minimizar consultas redundantes al backend. |

---

## RNF-08 — Calidad de código y proceso

| ID | Requisito |
|---|---|
| RNF-08.1 | El proyecto debe pasar ESLint y TypeScript sin errores antes de cada commit. |
| RNF-08.2 | El flujo de trabajo debe usar Conventional Commits con descripción pedagógica. |
| RNF-08.3 | Solo se permite el uso de `pnpm` como gestor de paquetes. |
| RNF-08.4 | No se permite acumular deuda técnica sin issue asociado (prohibidos `// TODO` sin seguimiento). |