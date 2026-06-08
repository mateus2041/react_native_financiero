from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# =========================
# CONFIGURACIÓN MYSQL
# =========================
USER = "root"
PASSWORD = ""
HOST = "localhost"
PORT = "3306"
DB = "billetera"

DATABASE_URL = f"mysql+mysqlconnector://root@localhost/billetera"

# =========================
# MOTOR DE CONEXIÓN
# =========================
engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True
)

# =========================
# SESIONES
# =========================
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# =========================
# BASE PARA MODELOS
# =========================
Base = declarative_base()

# =========================
# DEPENDENCIA FASTAPI
# =========================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()