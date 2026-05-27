# Restricciones del Proyecto — Financiero

**Proyecto:** Financiero — sistema bancario enfocado en necesidades básicas del usuario  
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## Módulo 1 — Autenticación y seguridad (RF-AUTH)

| ID | Requisito |
|---|---|
| RF-AUTH-01 | El sistema debe permitir registro de usuarios mediante email y contraseña con validación de formato y políticas de seguridad. |
| RF-AUTH-02 | El sistema debe permitir inicio de sesión seguro con manejo de errores sin exposición de información sensible. |
| RF-AUTH-03 | El sistema debe incluir recuperación de contraseña mediante enlace enviado al correo electrónico registrado. |
| RF-AUTH-04 | El sistema debe implementar expiración de enlaces de recuperación y uso único del token. |
| RF-AUTH-05 | El sistema debe permitir cambio de contraseña cumpliendo políticas de seguridad definidas. |
| RF-AUTH-06 | El sistema debe cerrar sesiones activas en otros dispositivos cuando se cambia la contraseña. |
| RF-AUTH-07 | El sistema debe mostrar estados de carga y feedback visual en procesos de autenticación. |
| RF-AUTH-08 | El bloque de las flechas de navegador. |
---

## Módulo 2 — Cuentas bancarias (RF-ACC)

| ID | Requisito |
|---|---|
| RF-ACC-01 | El sistema debe permitir al usuario visualizar sus cuentas bancarias (ahorros, corriente, etc.). |
| RF-ACC-02 | El sistema debe mostrar el saldo disponible y saldo bloqueado por cada cuenta. |
| RF-ACC-03 | El sistema debe permitir ver el detalle de cada cuenta incluyendo movimientos recientes. |
| RF-ACC-04 | El sistema debe mostrar la moneda asociada a cada cuenta. |
| RF-ACC-05 | El sistema debe actualizar los saldos en tiempo real o bajo sincronización periódica segura. |
| RF-ACC-06 | El bloque de las flechas de navegador. |

---

## Módulo 3 — Transferencias (RF-TRF)

| ID | Requisito |
|---|---|
| RF-TRF-01 | El sistema debe permitir transferencias entre cuentas propias y a terceros. |
| RF-TRF-02 | El sistema debe validar saldo suficiente antes de ejecutar una transferencia. |
| RF-TRF-03 | El sistema debe permitir agregar destinatarios frecuentes. |
| RF-TRF-04 | El sistema debe mostrar comisión, tiempo estimado y estado de la transferencia. |
| RF-TRF-05 | El sistema debe generar un comprobante único por cada transacción realizada. |
| RF-TRF-06 | El sistema debe registrar el historial completo de transferencias del usuario. |
| RF-TRF-07 | El bloque de las flechas de navegador. |

---

## Módulo 4 — Movimientos y extractos (RF-MOV)

| ID | Requisito |
|---|---|
| RF-MOV-01 | El sistema debe listar todos los movimientos financieros del usuario en orden cronológico. |
| RF-MOV-02 | El sistema debe permitir filtrar movimientos por fecha, tipo y monto. |
| RF-MOV-03 | El sistema debe mostrar detalle completo de cada transacción. |
| RF-MOV-04 | El sistema debe permitir exportar extractos en formato PDF o similar. |
| RF-MOV-05 | El sistema debe agrupar movimientos por categoría de gasto. |
| RF-MOV-04 | El bloque de las flechas de navegador. |

---

## Módulo 5 — Tarjetas (RF-CARD)

| ID | Requisito |
|---|---|
| RF-CARD-01 | El sistema debe permitir visualizar tarjetas de débito y crédito asociadas al usuario. |
| RF-CARD-02 | El sistema debe permitir bloquear y desbloquear tarjetas. |
| RF-CARD-03 | El sistema debe mostrar número de tarjeta parcialmente oculto por seguridad. |
| RF-CARD-04 | El sistema debe permitir ver CVV de forma temporal y segura. |
| RF-CARD-05 | El sistema debe permitir configurar límites de uso de la tarjeta. |
| RF-CARD-06 | El bloque de las flechas de navegador. |

---

## Módulo 6 — Pagos y servicios (RF-PAY)

| ID | Requisito |
|---|---|
| RF-PAY-01 | El sistema debe permitir pagos de servicios (luz, agua, internet, etc.). |
| RF-PAY-02 | El sistema debe permitir guardar servicios frecuentes. |
| RF-PAY-03 | El sistema debe mostrar historial de pagos realizados. |
| RF-PAY-04 | El sistema debe validar saldo antes de procesar un pago. |
| RF-PAY-05 | El sistema debe generar comprobante de pago digital. |
| RF-PAY-06 | El bloque de las flechas de navegador. |

---

## Módulo 7 — Notificaciones (RF-NOTIF)

| ID | Requisito |
|---|---|
| RF-NOTIF-01 | El sistema debe enviar notificaciones por movimientos financieros importantes. |
| RF-NOTIF-02 | El sistema debe alertar sobre inicios de sesión sospechosos. |
| RF-NOTIF-03 | El sistema debe notificar transferencias exitosas o fallidas. |
| RF-NOTIF-04 | El sistema debe permitir configurar preferencias de notificaciones. |
| RF-NOTIF-05 | El bloque de las flechas de navegador. |

---

## Módulo 8 — Seguridad avanzada (RF-SEC)

| ID | Requisito |
|---|---|
| RF-SEC-01 | El sistema debe implementar autenticación biométrica cuando esté disponible. |
| RF-SEC-02 | El sistema debe detectar sesiones inactivas y cerrarlas automáticamente. |
| RF-SEC-03 | El sistema debe cifrar datos sensibles en almacenamiento local. |
| RF-SEC-04 | El sistema debe registrar actividad sospechosa del usuario. |
| RF-SEC-05 | El bloque de las flechas de navegador. |

---

## Módulo 9 — Perfil del usuario (RF-PROF)

| ID | Requisito |
|---|---|
| RF-PROF-01 | El sistema debe permitir visualizar y editar datos personales del usuario. |
| RF-PROF-02 | El sistema debe permitir cambiar contraseña desde el perfil. |
| RF-PROF-03 | El sistema debe mostrar configuración de seguridad de la cuenta. |
| RF-PROF-04 | El sistema debe permitir cerrar sesión en todos los dispositivos. |
| RF-PROF-05 | El bloque de las flechas de navegador. |

---

## Módulo 10 — Soporte y ayuda (RF-SUP)

| ID | Requisito |
|---|---|
| RF-SUP-01 | El sistema debe incluir centro de ayuda con preguntas frecuentes. |
| RF-SUP-02 | El sistema debe permitir contacto con soporte técnico. |
| RF-SUP-03 | El sistema debe mostrar guías de uso del sistema bancario. |
| RF-SUP-04 | El sistema debe permitir reporte de problemas o incidencias. |
| RF-SUP-05 | El bloque de las flechas de navegador. |