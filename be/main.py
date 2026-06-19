from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from pydantic import BaseModel

from be.models import Usuarios
from be.security import hash_password, check_password, generate_token
from be.dependencias import get_db, engine, Base

financiero = FastAPI()

financiero.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@financiero.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)


class RegisterRequest(BaseModel):
    nombre: str
    email: str
    documento: str
    password: str
    tipo_documento: str


class LoginRequest(BaseModel):
    documento: str
    password: str


@financiero.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):

    existe = db.query(Usuarios).filter(
        Usuarios.numero_documento == data.documento
    ).first()

    if existe:
        raise HTTPException(status_code=409, detail="Usuario ya existe")

    nuevo = Usuarios(
        nombre=data.nombre,
        apellido="N/A",
        correo=data.email,
        contraseña=hash_password(data.password),
        numero_documento=data.documento,
        id_tipo=1
    )

    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)

    return {
        "message": "Usuario creado",
        "token": generate_token(str(nuevo.id_usuario))
    }


@financiero.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):

    usuario = db.query(Usuarios).filter(
        Usuarios.numero_documento == data.documento
    ).first()

    if not usuario:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    if not check_password(data.password, usuario.contraseña):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    return {
        "message": "Login OK",
        "token": generate_token(str(usuario.id_usuario))
    }


@financiero.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    db.execute(text("SELECT 1"))
    return {"message": "OK"}