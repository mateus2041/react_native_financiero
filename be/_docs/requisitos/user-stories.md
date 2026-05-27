## Épica — Autenticación y acceso al sistema Financiero

### HU-01 — Registro de usuario

> **Como** visitante,  
> **quiero** crear una cuenta en el sistema bancario con mi email y contraseña,  
> **para** poder acceder a mis servicios financieros de forma segura.

**Criterios de aceptación:**
- [ ] El formulario de registro valida email con formato correcto.
- [ ] La contraseña debe cumplir política de seguridad (mínimo 8 caracteres, mayúscula, número y símbolo).
- [ ] Se muestra feedback visual de carga durante el registro.
- [ ] Si el email ya existe, se muestra un mensaje de error genérico en español.
- [ ] El usuario recibe confirmación de registro exitoso.
- [ ] El usuario queda autenticado automáticamente tras el registro (si aplica configuración).

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`

---

### HU-02 — Inicio de sesión

> **Como** usuario registrado,  
> **quiero** iniciar sesión con mi email y contraseña,  
> **para** acceder a mi cuenta bancaria de forma segura.

**Criterios de aceptación:**
- [ ] El sistema valida credenciales contra el backend (Supabase Auth).
- [ ] No se muestran mensajes que revelen si el email existe o no.
- [ ] Se muestra estado de carga durante el proceso de login.
- [ ] El usuario accede al dashboard tras autenticación exitosa.
- [ ] Las sesiones se mantienen activas de forma segura entre reinicios.
- [ ] En caso de error, se muestra mensaje genérico en español.

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`

---

### HU-03 — Recuperación de contraseña

> **Como** usuario del banco,  
> **quiero** recuperar mi contraseña en caso de olvido,  
> **para** volver a acceder a mi cuenta de forma segura.

**Criterios de aceptación:**
- [ ] El sistema permite solicitar recuperación mediante email registrado.
- [ ] Se envía un enlace seguro de restablecimiento al correo del usuario.
- [ ] El enlace de recuperación tiene expiración automática.
- [ ] El enlace solo puede usarse una vez.
- [ ] El usuario puede establecer una nueva contraseña cumpliendo la política de seguridad.
- [ ] Se muestra confirmación de cambio exitoso de contraseña.
- [ ] Si el email no existe, el sistema muestra un mensaje genérico sin filtrar información.

**Estimación:** S (Pequeña)  
**Módulo:** `auth/`