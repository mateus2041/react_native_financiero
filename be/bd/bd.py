import mysql.connector

conexion = None
cursor = None

try:
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="TU_PASSWORD",
        database="billetera"
    )

    if conexion.is_connected():
        print("✅ Conectado a la base de datos")

        cursor = conexion.cursor()
        cursor.execute("SELECT DATABASE();")
        resultado = cursor.fetchone()

        print("Base de datos actual:", resultado[0])

except mysql.connector.Error as error:
    print("❌ Error al conectar:", error)

finally:
    if cursor is not None:
        cursor.close()

    if conexion is not None and conexion.is_connected():
        conexion.close()
        print("🔌 Conexión cerrada")