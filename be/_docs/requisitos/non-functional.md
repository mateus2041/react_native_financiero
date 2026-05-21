funcionales # requisitos funcionales - react_native_financiero
proyecto:react_native_financiero - aplicacion de gestion de finanzas personales en react native.
version: 1.0
fecha:mayo 2026

## modulo 1 - visualizacion de balance y saldos (rf-bal)

identificacion | requisitos|

rf-bal-01 el sistema debe de mostrar una pantalla de inicio(home) que muestre el saldo total disponible sumando totas las cuentas del usurio.
rf-bal-02 el sistema debe de mostrar una lista con las ultimas 5transacciones(ingresos o egresos) ordenadas cronologicamente.
rf-bal-03 el sistema debe permitir ocultar o mostrar los montos financieros mediante un boton de "ojo"
para proteger la privacidad del usuario.

## modulo 2 -registro de transacciones (rf-tra)

identificacion | requisito

rf-tra-01 el sistema debe permitir al usuario registrar ingresos y gastos mediante un formulario accesible desde la pantalla principal.
rf-tra-02 el formulario de registro debe validar obligatoriamente que el"monto"sea numerico,mayor acero y no quede vacio antes de guardar.
rf-tra-03el sistema debe desplegar una lista de categorias predefinidas(ej.comida,trasporte,servicios)para clasificar el flujo de dinero.