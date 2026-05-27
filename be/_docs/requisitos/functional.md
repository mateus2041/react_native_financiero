# Requisitos Funcionales — FinancieroMD

**Proyecto:** FinancieroMD — App de gestión financiera personal en React Native  
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Clasificación:** Académico

---

## Módulo 1 — Navegación (RF-NAV)

| ID | Requisito |
|---|---|
| RF-NAV-01 | El sistema debe presentar una pantalla de inicio (Home) que muestre el resumen financiero del usuario (saldo total, ingresos, gastos, ahorro). |
| RF-NAV-02 | El sistema debe implementar navegación tipo Stack para el flujo de detalle de transacciones. |
| RF-NAV-03 | El sistema debe implementar navegación tipo Tabs para las secciones principales: Resumen, Transacciones, Presupuesto, Perfil. |
| RF-NAV-04 | El sistema debe implementar un Drawer lateral con acceso rápido a todas las funcionalidades del sistema financiero. |
| RF-NAV-05 | El sistema debe soportar deep linking para abrir directamente una transacción, categoría o reporte desde una URL externa. |

---

## Módulo 2 — Gestión de transacciones (RF-TRX)

| ID | Requisito |
|---|---|
| RF-TRX-01 | El sistema debe permitir crear transacciones de tipo ingreso o gasto. |
| RF-TRX-02 | El sistema debe permitir editar y eliminar transacciones existentes. |
| RF-TRX-03 | El sistema debe registrar fecha, monto, categoría y descripción en cada transacción. |
| RF-TRX-04 | El sistema debe listar transacciones con virtualización (FlatList) soportando al menos 1000 registros sin degradación visible. |
| RF-TRX-05 | El sistema debe permitir filtrar transacciones por fecha, categoría y tipo (ingreso/gasto). |
| RF-TRX-06 | El sistema debe calcular automáticamente el balance total del usuario en tiempo real. |

---

## Módulo 3 — Categorías financieras (RF-CAT)

| ID | Requisito |
|---|---|
| RF-CAT-01 | El sistema debe permitir crear, editar y eliminar categorías personalizadas. |
| RF-CAT-02 | El sistema debe incluir categorías por defecto (alimentación, transporte, vivienda, ocio, salud). |
| RF-CAT-03 | El sistema debe asignar una categoría obligatoria a cada transacción. |
| RF-CAT-04 | El sistema debe mostrar el gasto total por categoría en gráficos resumen. |

---

## Módulo 4 — Presupuestos (RF-BUD)

| ID | Requisito |
|---|---|
| RF-BUD-01 | El sistema debe permitir crear presupuestos mensuales por categoría. |
| RF-BUD-02 | El sistema debe mostrar el progreso del presupuesto en tiempo real. |
| RF-BUD-03 | El sistema debe alertar cuando una categoría supere el 80% del presupuesto. |
| RF-BUD-04 | El sistema debe bloquear la creación de transacciones opcionalmente si se supera el presupuesto configurado. |

---

## Módulo 5 — Análisis financiero (RF-ANL)

| ID | Requisito |
|---|---|
| RF-ANL-01 | El sistema debe mostrar gráficos de ingresos vs gastos por mes. |
| RF-ANL-02 | El sistema debe mostrar evolución del ahorro en el tiempo. |
| RF-ANL-03 | El sistema debe permitir seleccionar rangos de fechas personalizados para análisis. |
| RF-ANL-04 | El sistema debe calcular tendencias de gasto por categoría. |

---

## Módulo 6 — Autenticación (RF-AUTH)

| ID | Requisito |
|---|---|
| RF-AUTH-01 | El sistema debe permitir registro e inicio de sesión mediante email/contraseña usando Supabase Auth. |
| RF-AUTH-02 | El sistema debe permitir cierre de sesión seguro. |
| RF-AUTH-03 | El sistema debe mantener la sesión activa entre reinicios de la app. |
| RF-AUTH-04 | El sistema debe aislar los datos financieros por usuario autenticado. |

---

## Módulo 7 — Seguridad financiera (RF-SEC)

| ID | Requisito |
|---|---|
| RF-SEC-01 | El sistema no debe almacenar datos bancarios reales (tarjetas, CVV o credenciales bancarias). |
| RF-SEC-02 | Todas las comunicaciones deben realizarse mediante HTTPS obligatorio. |
| RF-SEC-03 | Los datos financieros deben cifrarse en reposo cuando se almacenen localmente o en Supabase. |
| RF-SEC-04 | El sistema debe bloquear acceso tras múltiples intentos fallidos de autenticación. |

---

## Módulo 8 — Sincronización y datos (RF-SYNC)

| ID | Requisito |
|---|---|
| RF-SYNC-01 | El sistema debe sincronizar transacciones con Supabase en tiempo real. |
| RF-SYNC-02 | El sistema debe funcionar en modo offline con sincronización posterior. |
| RF-SYNC-03 | El sistema debe resolver conflictos de datos en caso de edición simultánea. |
| RF-SYNC-04 | El sistema debe mantener un historial de cambios de transacciones (auditoría básica). |

---

## Módulo 9 — Reportes y exportación (RF-REP)

| ID | Requisito |
|---|---|
| RF-REP-01 | El sistema debe generar reportes mensuales en formato visual (gráficos + resumen). |
| RF-REP-02 | El sistema debe permitir exportar datos a CSV o PDF. |
| RF-REP-03 | El sistema debe permitir filtrar reportes por rango de fechas. |
| RF-REP-04 | El sistema debe mostrar resumen de ahorro anual proyectado. |

---

## Módulo 10 — Notificaciones financieras (RF-NOTIF)

| ID | Requisito |
|---|---|
| RF-NOTIF-01 | El sistema debe enviar notificaciones cuando se supere un presupuesto. |
| RF-NOTIF-02 | El sistema debe notificar gastos inusuales detectados (outliers simples). |
| RF-NOTIF-03 | El sistema debe enviar recordatorios de registro diario de gastos. |
| RF-NOTIF-04 | El sistema debe permitir configurar frecuencia de notificaciones. |

---

## Módulo 11 — Plataforma y UX (RF-PLAT)

| ID | Requisito |
|---|---|
| RF-PLAT-01 | El sistema debe ser completamente responsivo en Android, iOS y Web. |
| RF-PLAT-02 | El sistema debe adaptar componentes UI a cada plataforma (ActionSheet iOS, BottomSheet Android). |
| RF-PLAT-03 | En Web, el sistema debe ser usable desde 320 px hasta 1440 px de ancho. |
| RF-PLAT-04 | El sistema debe mantener consistencia visual en todos los módulos financieros. |

---

## Módulo 12 — Configuración y perfil (RF-PROF)

| ID | Requisito |
|---|---|
| RF-PROF-01 | El usuario debe poder editar su perfil (nombre, moneda base, país). |
| RF-PROF-02 | El sistema debe permitir seleccionar moneda base para conversión de valores. |
| RF-PROF-03 | El sistema debe permitir activar/desactivar modo oscuro. |
| RF-PROF-04 | El sistema debe permitir eliminar la cuenta junto con todos los datos asociados. |

## Módulo 13 — Asistente financiero (Chatbot) (RF-BOT)

| ID | Requisito |
|---|---|
| RF-BOT-01 | El sistema debe incluir un chatbot financiero accesible desde todas las pantallas de la aplicación. |
| RF-BOT-02 | El chatbot debe responder preguntas sobre transacciones del usuario (gastos, ingresos, balance, categorías). |
| RF-BOT-03 | El chatbot debe ser capaz de generar resúmenes financieros diarios, semanales y mensuales bajo demanda. |
| RF-BOT-04 | El chatbot debe sugerir mejoras de ahorro basadas en patrones de gasto detectados (sin dar asesoramiento financiero profesional). |
| RF-BOT-05 | El chatbot debe permitir consultas en lenguaje natural como “¿cuánto gasté en comida este mes?” o “muéstrame mis mayores gastos”. |
| RF-BOT-06 | El chatbot debe estar autenticado y solo acceder a datos del usuario activo. |
| RF-BOT-07 | El chatbot debe registrar el historial de conversaciones del usuario. |
| RF-BOT-08 | El chatbot debe ofrecer respuestas estructuradas (texto + métricas + resumen visual cuando aplique). |
| RF-BOT-09 | El chatbot debe manejar errores o falta de datos con respuestas informativas y no técnicas. |
| RF-BOT-10 | El chatbot debe funcionar en modo offline limitado mostrando respuestas basadas en datos cacheados. |