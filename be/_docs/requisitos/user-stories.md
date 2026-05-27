# Historias de Usuario — FinancieroMD

**Proyecto:** FinancieroMD — App de gestión financiera personal en React Native  
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Clasificación:** Académico

---

## Actores del sistema

| Actor | Descripción |
|---|---|
| **Visitante** | Usuario no autenticado que explora funcionalidades limitadas de la app. |
| **Usuario (Registrado)** | Usuario autenticado que gestiona sus finanzas personales. |
| **Desarrollador** | Persona que estudia el sistema como referencia académica. |

---

## Épica 1 — Gestión financiera básica

### HU-01 — Registrar transacciones

> **Como** usuario,  
> **quiero** registrar ingresos y gastos,  
> **para** llevar un control de mis finanzas personales.

**Criterios de aceptación:**
- [ ] Puedo crear una transacción con monto, categoría, fecha y descripción.
- [ ] Puedo seleccionar si es ingreso o gasto.
- [ ] La transacción se guarda asociada a mi usuario.
- [ ] Se valida que el monto sea mayor a cero.
- [ ] Se muestra confirmación al guardar.

**Estimación:** M (Media)  
**Módulo:** `transactions/`

---

### HU-02 — Visualizar historial de transacciones

> **Como** usuario,  
> **quiero** ver todas mis transacciones ordenadas por fecha,  
> **para** revisar mi actividad financiera.

**Criterios de aceptación:**
- [ ] Las transacciones se muestran en orden cronológico inverso.
- [ ] Se visualizan monto, categoría, tipo y fecha.
- [ ] Se puede hacer scroll eficiente con listas virtualizadas.
- [ ] Se muestra indicador de carga mientras se obtienen datos.

**Estimación:** M (Media)  
**Módulo:** `transactions/`

---

## Épica 2 — Control de presupuesto

### HU-03 — Crear presupuestos por categoría

> **Como** usuario,  
> **quiero** definir presupuestos mensuales,  
> **para** controlar mis gastos por categoría.

**Criterios de aceptación:**
- [ ] Puedo asignar un límite de gasto por categoría.
- [ ] El sistema asocia el presupuesto a un mes específico.
- [ ] Se muestra progreso visual del presupuesto.
- [ ] No puedo crear presupuestos duplicados para la misma categoría y mes.

**Estimación:** M (Media)  
**Módulo:** `budget/`

---

### HU-04 — Alertas de sobrepresupuesto

> **Como** usuario,  
> **quiero** recibir alertas cuando me acerco o supero mi presupuesto,  
> **para** evitar gastar de más.

**Criterios de aceptación:**
- [ ] Se envía alerta al superar el 80% del presupuesto.
- [ ] Se envía alerta al superar el 100%.
- [ ] Las alertas se muestran dentro de la app y como notificación.
- [ ] Puedo desactivar estas alertas.

**Estimación:** S (Pequeña)  
**Módulo:** `notifications/`

---

## Épica 3 — Análisis financiero

### HU-05 — Ver resumen financiero

> **Como** usuario,  
> **quiero** ver un resumen de mis finanzas,  
> **para** entender mi situación económica actual.

**Criterios de aceptación:**
- [ ] Se muestra balance total (ingresos - gastos).
- [ ] Se muestran totales mensuales.
- [ ] Se muestran categorías más gastadas.
- [ ] Se carga en menos de 2 segundos.

**Estimación:** S (Pequeña)  
**Módulo:** `analytics/`

---

### HU-06 — Visualizar gráficos financieros

> **Como** usuario,  
> **quiero** ver gráficos de mis ingresos y gastos,  
> **para** analizar tendencias.

**Criterios de aceptación:**
- [ ] Se muestran gráficos de ingresos vs gastos.
- [ ] Se muestran gráficos por categoría.
- [ ] Se pueden filtrar por mes o rango de fechas.
- [ ] Los gráficos son interactivos.

**Estimación:** M (Media)  
**Módulo:** `analytics/`

---

## Épica 4 — Autenticación y seguridad

### HU-07 — Registro de usuario

> **Como** visitante,  
> **quiero** crear una cuenta,  
> **para** guardar mis datos financieros de forma segura.

**Criterios de aceptación:**
- [ ] Registro con email y contraseña.
- [ ] Validación de email correcto.
- [ ] Contraseña mínima de 8 caracteres.
- [ ] Confirmación de registro exitosa.

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`

---

### HU-08 — Inicio de sesión seguro

> **Como** usuario,  
> **quiero** iniciar sesión,  
> **para** acceder a mis finanzas personales.

**Criterios de aceptación:**
- [ ] Login con email y contraseña.
- [ ] Mensaje de error en caso de credenciales incorrectas.
- [ ] Sesión persistente entre reinicios.
- [ ] Logout disponible.

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`

---

### HU-09 — Autenticación biométrica

> **Como** usuario,  
> **quiero** iniciar sesión con biometría,  
> **para** acceder más rápido y seguro.

**Criterios de aceptación:**
- [ ] Soporta huella o Face ID si el dispositivo lo permite.
- [ ] Fallback a contraseña si falla la biometría.
- [ ] No aparece si el dispositivo no lo soporta.

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`

---

## Épica 5 — Chatbot financiero

### HU-10 — Consultar mi estado financiero con lenguaje natural

> **Como** usuario,  
> **quiero** preguntar cosas en lenguaje natural,  
> **para** entender mis finanzas fácilmente.

**Criterios de aceptación:**
- [ ] Puedo preguntar: “¿Cuánto gasté en comida este mes?”
- [ ] El bot responde con datos reales del usuario.
- [ ] Se muestran métricas resumidas (no solo texto).
- [ ] Maneja preguntas ambiguas con aclaraciones.

**Estimación:** L (Grande)  
**Módulo:** `chatbot/`

---

### HU-11 — Generar resúmenes automáticos

> **Como** usuario,  
> **quiero** recibir resúmenes automáticos,  
> **para** entender mis hábitos de gasto.

**Criterios de aceptación:**
- [ ] Resume gastos semanales y mensuales.
- [ ] Detecta patrones simples de gasto.
- [ ] Sugiere áreas de ahorro (sin asesoría financiera profesional).
- [ ] Se puede solicitar bajo demanda.

**Estimación:** M (Media)  
**Módulo:** `chatbot/`

---

### HU-12 — Historial de conversaciones

> **Como** usuario,  
> **quiero** ver mis conversaciones con el chatbot,  
> **para** revisar mis consultas anteriores.

**Criterios de aceptación:**
- [ ] Se guarda el historial por usuario.
- [ ] Se pueden consultar conversaciones anteriores.
- [ ] Se puede borrar historial completo.
- [ ] Las conversaciones están protegidas por autenticación.

**Estimación:** S (Pequeña)  
**Módulo:** `chatbot/`

---

## Épica 6 — Perfil y configuración

### HU-13 — Configurar perfil financiero

> **Como** usuario,  
> **quiero** editar mi perfil,  
> **para** personalizar la app a mis necesidades.

**Criterios de aceptación:**
- [ ] Puedo cambiar nombre y moneda base.
- [ ] La moneda afecta a toda la app.
- [ ] Los cambios se guardan en Supabase.
- [ ] Se muestra confirmación de actualización.

**Estimación:** S (Pequeña)  
**Módulo:** `profile/`

---

### HU-14 — Eliminar cuenta

> **Como** usuario,  
> **quiero** eliminar mi cuenta,  
> **para** borrar mis datos personales.

**Criterios de aceptación:**
- [ ] Se solicita confirmación antes de eliminar.
- [ ] Se eliminan transacciones, presupuestos y perfil.
- [ ] Se cierra sesión automáticamente.
- [ ] Acción irreversible claramente advertida.

**Estimación:** S (Pequeña)  
**Módulo:** `profile/`

---

## Épica 7 — Sincronización y offline

### HU-15 — Uso offline de la app

> **Como** usuario,  
> **quiero** usar la app sin conexión,  
> **para** seguir registrando mis finanzas sin internet.

**Criterios de aceptación:**
- [ ] Puedo ver transacciones cacheadas.
- [ ] Puedo crear transacciones offline.
- [ ] Se sincronizan cuando vuelve la conexión.
- [ ] Se muestra indicador de modo offline.

**Estimación:** M (Media)  
**Módulo:** `sync/`

---

### HU-16 — Sincronización en tiempo real

> **Como** usuario,  
> **quiero** ver mis datos actualizados en tiempo real,  
> **para** mantener consistencia entre dispositivos.

**Criterios de aceptación:**
- [ ] Cambios se reflejan sin recargar la app.
- [ ] Soporta múltiples dispositivos conectados.
- [ ] Maneja conflictos básicos de sincronización.
- [ ] Reconexión automática si se pierde conexión.

**Estimación:** M (Media)  
**Módulo:** `sync/`