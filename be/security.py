from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi import HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from datetime import datetime, timedelta

# =========================
# HASH (ARGON2)
# =========================
pwd_context = CryptContext(
    schemes=["argon2"],
    deprecated="auto"
)

# =========================
# JWT CONFIG
# =========================
SECRET_KEY = "clave_super_secreta_cambiala_por_una_mas_larga"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

security = HTTPBearer()

# =========================
# HASH PASSWORD
# =========================
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

# =========================
# VERIFICAR PASSWORD
# =========================
def check_password(plain: str, hashed: str) -> bool:
    try:
        return pwd_context.verify(plain, hashed)
    except Exception:
        return False

# =========================
# GENERAR TOKEN JWT
# =========================
def generate_token(identity: int):
    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": str(identity),
        "exp": expire
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

# =========================
# VALIDAR TOKEN
# =========================
def token_required(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    try:
        token = credentials.credentials

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token inválido"
            )

        return int(user_id)

    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido o expirado"
        )

# =========================
# OBTENER ID USUARIO
# =========================
def get_current_user_id(
    user_id: int = Depends(token_required)
):
    return user_id