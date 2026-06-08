from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from be.models import Usuarios
from be.security import (
    hash_password,
    check_password,
    generate_token,
)
from be.dependencias import get_db, engine, Base
from pydantic import BaseModel

financiero = FastAPI()

# =======================
# CORS
# =======================
financiero.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =======================
# CREATE TABLES
# =======================
@financiero.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)


# =======================
# SCHEMAS (IMPORTANTE)
# =======================
class LoginRequest(BaseModel):
    documento: str
    password: str


class RegisterRequest(BaseModel):
    nombre: str
    email: str
    password: str
    documento: str
    telefono: str | None = None


# =======================
# REGISTER
# =======================
@financiero.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):

    if len(data.password) < 6:
        raise HTTPException(status_code=400, detail="Contraseña muy corta")

    existe = db.query(Usuarios).filter(
        Usuarios.documento == data.documento
    ).first()

    if existe:
        raise HTTPException(status_code=409, detail="Usuario ya existe")

    hashed = hash_password(data.password)

    nuevo_usuario = Usuarios(
        nombre=data.nombre,
        email=data.email,
        password=hashed,
        documento=data.documento,
        telefono=data.telefono,
    )

    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)

    token = generate_token(identity=nuevo_usuario.id_usuario)

    return {
        "message": "Usuario creado",
        "token": token,
        "usuario": {
            "id": nuevo_usuario.id_usuario,
            "nombre": nuevo_usuario.nombre,
            "email": nuevo_usuario.email,
        },
    }


# =======================
# LOGIN
# =======================
@financiero.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):

    usuario = db.query(Usuarios).filter(
        Usuarios.documento == data.documento
    ).first()

    if not usuario:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    if not check_password(data.password, usuario.password):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = generate_token(identity=str(usuario.id_usuario))

    return {
        "message": "Login exitoso",
        "token": token
    }


# =======================
# TEST DB
# =======================
@financiero.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    db.execute(text("SELECT 1"))
    return {"message": "OK"}