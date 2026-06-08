from sqlalchemy import Column, Integer, String, DECIMAL, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from be.dependencias import Base


# ==========================
# TIPO DOCUMENTO
# ==========================
class TipoDocumento(Base):
    __tablename__ = "TipoDocumento"

    id_tipo = Column(Integer, primary_key=True, autoincrement=True)
    nombre_doc = Column(String(20), nullable=False)

    usuarios = relationship("Usuarios", back_populates="tipo_documento")


# ==========================
# USUARIOS
# ==========================
class Usuarios(Base):
    __tablename__ = "Usuarios"

    id_usuario = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False)
    apellido = Column(String(100), nullable=False)
    correo = Column(String(100), unique=True, nullable=False)
    contraseña = Column(String(255), nullable=False)
    numero_documento = Column(String(20), unique=True, nullable=False)

    fecha_registro = Column(
        DateTime,
        default=datetime.utcnow
    )

    id_tipo = Column(
        Integer,
        ForeignKey("TipoDocumento.id_tipo"),
        nullable=False
    )

    tipo_documento = relationship(
        "TipoDocumento",
        back_populates="usuarios"
    )

    cuentas = relationship(
        "Cuentas",
        back_populates="usuario"
    )

    tokens = relationship(
        "Tokens",
        back_populates="usuario"
    )


# ==========================
# CUENTAS
# ==========================
class Cuentas(Base):
    __tablename__ = "Cuentas"

    id_cuenta = Column(Integer, primary_key=True, autoincrement=True)

    id_usuario = Column(
        Integer,
        ForeignKey("Usuarios.id_usuario"),
        nullable=False
    )

    saldo = Column(
        DECIMAL(10, 2),
        default=0.00
    )

    estado = Column(
        String(20),
        default="activa"
    )

    usuario = relationship(
        "Usuarios",
        back_populates="cuentas"
    )

    transacciones = relationship(
        "Transacciones",
        back_populates="cuenta"
    )


# ==========================
# TRANSACCIONES
# ==========================
class Transacciones(Base):
    __tablename__ = "Transacciones"

    id_transaccion = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_cuenta = Column(
        Integer,
        ForeignKey("Cuentas.id_cuenta"),
        nullable=False
    )

    tipo = Column(
        String(20),
        nullable=False
    )

    monto = Column(
        DECIMAL(10, 2),
        nullable=False
    )

    fecha = Column(
        DateTime,
        default=datetime.utcnow
    )

    cuenta = relationship(
        "Cuentas",
        back_populates="transacciones"
    )

    debito = relationship(
        "Debitos",
        back_populates="transaccion",
        uselist=False
    )

    credito = relationship(
        "Creditos",
        back_populates="transaccion",
        uselist=False
    )


# ==========================
# ADMINISTRADORES
# ==========================
class Administradores(Base):
    __tablename__ = "Administradores"

    id_admin = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    nombre = Column(
        String(100),
        nullable=False
    )

    correo = Column(
        String(100),
        unique=True,
        nullable=False
    )

    contraseña = Column(
        String(255),
        nullable=False
    )

    rol = Column(
        String(50),
        default="supervisor"
    )

    fecha_creacion = Column(
        DateTime,
        default=datetime.utcnow
    )


# ==========================
# TOKENS
# ==========================
class Tokens(Base):
    __tablename__ = "Tokens"

    id_token = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_usuario = Column(
        Integer,
        ForeignKey("Usuarios.id_usuario"),
        nullable=False
    )

    token_valor = Column(
        String(255),
        nullable=False
    )

    tipo_token = Column(
        String(50)
    )

    fecha_expiracion = Column(
        DateTime
    )

    estado = Column(
        String(20),
        default="activo"
    )

    usuario = relationship(
        "Usuarios",
        back_populates="tokens"
    )


# ==========================
# DEBITOS
# ==========================
class Debitos(Base):
    __tablename__ = "Debitos"

    id_debito = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_transaccion = Column(
        Integer,
        ForeignKey("Transacciones.id_transaccion"),
        nullable=False
    )

    id_cuenta = Column(
        Integer,
        ForeignKey("Cuentas.id_cuenta"),
        nullable=False
    )

    monto = Column(
        DECIMAL(10, 2),
        nullable=False
    )

    descripcion = Column(
        String(255)
    )

    transaccion = relationship(
        "Transacciones",
        back_populates="debito"
    )


# ==========================
# CREDITOS
# ==========================
class Creditos(Base):
    __tablename__ = "Creditos"

    id_credito = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_transaccion = Column(
        Integer,
        ForeignKey("Transacciones.id_transaccion"),
        nullable=False
    )

    id_cuenta = Column(
        Integer,
        ForeignKey("Cuentas.id_cuenta"),
        nullable=False
    )

    monto = Column(
        DECIMAL(10, 2),
        nullable=False
    )

    descripcion = Column(
        String(255)
    )

    transaccion = relationship(
        "Transacciones",
        back_populates="credito"
    )