# Restricciones del Proyecto — Financiero

**Proyecto:** Financiero — un proyecto que el apuntamos a las nesidades del usurio  básica en React Native 
**Versión:** 1.0  
**Fecha:** MAYO 2026  
**Clasificación:** Académico

---

## Módulo 1 — Navegación (RF-NAV)

| ID | Requisito |
|---|---|
| RF-NAV-01 | El sistema debe presentar una pantalla de inicio (Home/Dashboard) que liste todos los productos financieros disponibles con su estado por plataforma (Android ✓ / Web ✓ / iOS pendiente). |
| RF-NAV-02 | El sistema debe implementar navegación tipo Stack para el flujo de detalle de cuentas, tarjetas y movimientos. |
| RF-NAV-03 | El sistema debe implementar navegación tipo Tabs para las secciones principales: Consolidado, Transferir, Estadísticas, Perfil. |
| RF-NAV-04 | El sistema debe implementar un Drawer lateral con acceso rápido a todos los módulos y herramientas del showcase bancario. |
| RF-NAV-05 | El sistema debe soportar deep linking para abrir directamente cualquier módulo o pasarela de pago desde una URL externa o código QR. |

---

## Módulo 2 — Catálogo de cuerpos del sistema solar (RF-LIST)

| ID | Requisito |
|---|---|
| RF-LIST-01 | El sistema debe consultar la API del Core Bancario y mostrar la lista completa de productos y transacciones del usuario (cuentas, tarjetas, créditos). |
| RF-LIST-02 | El sistema debe renderizar la lista con virtualización eficiente (FlatList), soportando al menos 500 movimientos sin degradación visible de rendimiento. |
| RF-LIST-03 | El sistema debe agrupar las transacciones por tipo o categoría de gasto (servicios, comida, transporte, entretenimiento) usando SectionList. |
| RF-LIST-04 | El sistema debe mostrar en cada ítem: comercio/concepto, tipo de movimiento, monto, divisa y fecha/hora. |
| RF-LIST-05 | El sistema debe navegar al detalle del movimiento o comprobante digital al seleccionar un ítem de la lista. |

---

## Módulo 3 — Búsqueda de asteroides (RF-FORM)

| ID | Requisito |
|---|---|
| RF-FORM-01 | El sistema debe presentar un formulario con campos de cuenta origen, cuenta destino (o número de celular), monto y concepto para filtrar o realizar transferencias. |
| RF-FORM-02 | El sistema debe validar que el saldo disponible en la cuenta origen sea mayor o igual al monto que se desea transferir. |
| RF-FORM-03 | El sistema debe validar que el monto de la transacción no supere el límite diario permitido por la regulación de la plataforma. |
| RF-FORM-04 | El sistema debe gestionar el foco entre campos y el cierre del teclado virtual numérico al enviar el formulario. |
| RF-FORM-05 | El sistema debe consultar la API de validación de identidad del beneficiario y mostrar los resultados antes de procesar el pago. |
| RF-FORM-06 | El sistema debe mostrar para cada transferencia: número de referencia, velocidad de procesamiento (inmediata/ACH), comisión aplicada y estado final. |

---

## Módulo 4 — Animaciones orbitales (RF-ANIM)

| ID | Requisito |
|---|---|
| RF-ANIM-01 | El sistema debe animar la transición y actualización de los gráficos de barras y pastel del módulo de estadísticas de gastos usando Reanimated 3. |
| RF-ANIM-02 | El sistema debe implementar rotación 3D de una tarjeta de crédito/débito virtual al recibir un gesto de arrastre (drag) del usuario. |
| RF-ANIM-03 | El sistema debe implementar una animación spring al seleccionar un producto financiero (efecto de zoom o destaque). |
| RF-ANIM-04 | Las barras de progreso de las metas de ahorro e inversión en la animación deben ser proporcionales a los montos y metas reales de cada usuario. |

---

## Módulo 5 — Cámara y AR (RF-CAM)

| ID | Requisito |
|---|---|
| RF-CAM-01 | El sistema debe solicitar permiso de cámara al usuario antes de activarla, explicando el motivo (pago QR / captura de cheques). |
| RF-CAM-02 | El sistema debe mostrar un overlay de encuadre (mira visual) sobre la vista de la cámara en tiempo real para capturar cheques o escanear códigos QR de pago. |
| RF-CAM-03 | El sistema debe usar el giroscopio o sensores de estabilidad para ajustar el overlay y asegurar que la captura no esté borrosa. |
| RF-CAM-04 | El sistema debe capturar una foto del documento de pago/cheque, optimizarla localmente y permitir guardarla o enviarla para su procesamiento. |
| RF-CAM-05 | En plataformas donde la cámara no esté disponible (Web), el sistema debe mostrar un mensaje informativo y deshabilitar el módulo, ofreciendo carga manual de archivos. |

---

## Módulo 6 — Rastreo ISS (RF-MAP)

| ID | Requisito |
|---|---|
| RF-MAP-01 | El sistema debe mostrar un mapa terrestre con la posición actual de los cajeros automáticos (ATM) y sucursales físicas, actualizada cada 5 minutos. |
| RF-MAP-02 | El sistema debe trazar la trayectoria u ruta óptima desde la ubicación del usuario hasta el cajero seleccionado en los últimos minutos. |
| RF-MAP-03 | El sistema debe mostrar las coordenadas e información actual (dirección, horario, disponibilidad de efectivo, tiempo de espera en fila) de la sucursal. |
| RF-MAP-04 | El sistema debe mostrar la lista de ejecutivos o asesores financieros actualmente disponibles en esa sucursal para agendar citas. |
| RF-MAP-05 | El sistema debe permitir centrar el mapa sobre la posición actual del usuario con un botón flotante. |

---

## Módulo 7 — Almacenamiento local (RF-STOR)

| ID | Requisito |
|---|---|
| RF-STOR-01 | El sistema debe almacenar en caché de forma cifrada el balance consolidado del día para su visualización offline rápida. |
| RF-STOR-02 | El sistema debe permitir marcar cuentas destino o servicios como favoritos y persistirlos localmente de forma segura. |
| RF-STOR-03 | El sistema debe almacenar el historial de búsquedas de comercios o conceptos en el estado de cuenta (últimas 10 búsquedas). |
| RF-STOR-04 | El sistema debe ofrecer una pantalla de gestión de seguridad y caché que muestre el espacio de datos financieros usado y permita borrarlo para cerrar sesión de manera limpia. |

---

## Módulo 8 — Notificaciones (RF-NOTIF)

| ID | Requisito |
|---|---|
| RF-NOTIF-01 | El sistema debe solicitar permiso de notificaciones al usuario con explicación del propósito (alertas de cargos e ingresos). |
| RF-NOTIF-02 | El sistema debe enviar una notificación local/push inmediata cuando se detecte un cargo o retiro de nivel inusual o sospechoso (prevención de fraude). |
| RF-NOTIF-03 | El sistema debe permitir configurar alertas de geofencing para cuando las tarjetas asociadas pasen o sean usadas en ubicaciones específicas (radio fuera del perímetro del usuario). |
| RF-NOTIF-04 | El sistema debe mostrar el resumen financiero o estado de cuenta interactivo mensual como notificación si el usuario activa esa opción. |

---

## Módulo 9 — Sensores y star map (RF-SENS)

| ID | Requisito |
|---|---|
| RF-SENS-01 | El sistema debe leer el giroscopio del dispositivo de forma interna para analizar patrones de movimiento físico sospechosos durante transacciones críticas. |
| RF-SENS-02 | El sistema debe leer el acelerómetro para detectar la inclinación del dispositivo y ocultar datos sensibles de la tarjeta en pantalla ante ángulos de mirada indiscreta. |
| RF-SENS-03 | El sistema debe mostrar un Token Digital dinámico de al menos 6 dígitos posicionado según variables de tiempo síncronas reales (algoritmo TOTP). |
| RF-SENS-04 | El sistema debe degradar funcionalmente en dispositivos sin sensores avanzados o biometría, requiriendo contraseñas estáticas tradicionales o pines por SMS. |

---

## Módulo 10 — Autenticación y perfil (RF-AUTH)

| ID | Requisito |
|---|---|
| RF-AUTH-01 | El sistema debe permitir registro e inicio de sesión seguro mediante email/contraseña utilizando Supabase Auth. |
| RF-AUTH-02 | El sistema debe ofrecer autenticación biométrica (huella / Face ID) como método alternativo prioritario de ingreso en la sesión activa. |
| RF-AUTH-03 | El sistema debe mantener la sesión activa de forma segura entre reinicios de la app usando el almacenamiento cifrado por hardware del dispositivo. |
| RF-AUTH-04 | El usuario autenticado debe poder registrar un diario financiero o agenda de presupuestos (fecha, monto del gasto manual, notas, foto del comprobante físico) en Supabase. |
| RF-AUTH-05 | El usuario debe poder consultar, editar y eliminar sus propios registros y metas presupuestarias. |

---

## Módulo 11 — Realtime ISS (RF-RT)

| ID | Requisito |
|---|---|
| RF-RT-01 | El sistema debe publicar y actualizar la tasa de cambio de divisas (Dólar, Euro, monedas locales) en Supabase Realtime cada 5 segundos. |
| RF-RT-02 | Múltiples clientes suscritos al canal deben recibir la actualización de las cotizaciones monetarias simultáneamente en pantalla sin refrescar. |
| RF-RT-03 | El sistema debe reconectarse automáticamente tras una pérdida de conexión de red sin intervención del usuario, alertando del estado de sincronización. |

---

## Módulo 12 — Diferencias de plataforma (RF-PLAT)

| ID | Requisito |
|---|---|
| RF-PLAT-01 | El sistema debe mostrar en una pantalla comparativa el comportamiento de los esquemas de seguridad y permisos (cámara, biometría, almacenamiento) en Android, Web e iOS. |
| RF-PLAT-02 | El sistema debe adaptar los componentes de UI de la pasarela financiera a las convenciones de cada plataforma (ActionSheet nativo en iOS, BottomSheet en Android). |
| RF-PLAT-03 | En plataformas Web (Home Banking), el sistema debe ser responsivo y seguro desde pantallas móviles de 320 px hasta escritorios de 1440 px de ancho. |

---

## Comprobantes Digitales — Facturación (RF-APOD)

| ID | Requisito |
|---|---|
| RF-APOD-01 | El sistema debe consultar la API de Facturación Electrónica y mostrar el detalle del comprobante del día seleccionado con su título, descripción y sellos fiscales. |
| RF-APOD-02 | El sistema debe permitir navegar a los comprobantes digitales e históricos de transacciones de días anteriores (hasta 30 días hacia atrás). |
| RF-APOD-03 | El sistema debe soportar visualización de facturas en alta resolución en formatos PDF o imagen con carga progresiva para optimizar el rendimiento. |