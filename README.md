# EFI-API

Este proyecto es una API construida con Node.js, Express, Sequelize y MySQL.

## Requisitos previos

- Node.js instalado
- MySQL en ejecución
- Clonar este repositorio

## Instalación

1. Clona este repositorio y navega a la carpeta del proyecto:

```bash
git clone <URL-del-repositorio>
cd EFI-API
```

### 2. Instala las dependencias
npm install

### 3. Crea un archivo .env en la raíz del proyecto con la configuración de la base de datos:
```bash
DB_USERNAME = root - usuario de mysql personal  
DB_PASSWORD = root1234 - contraseña de mysql personal  
DB_DATABASE = nombre_de_tu_db - nombre de base de datos de mysql personal   
DB_HOST = 127.0.0.1    
PORT = 4000   
JWT_SECRET = "myVerySecureAndUniqueSecretKey12345!" - clave secreta para verificar tokens
```

### 4. Crea la base de datos en MySQL:
Ubicados dentro de la carpeta del proyecto ejecutamos node createDatabase.js

// Conexión sin especificar una base de datos concreta
const sequelize = new Sequelize('', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
});

En este fragmento de código debemos respetar nuestro usuario y contraseña de MySql

### 5. Ejecutar Migraciones  
Ejecuta las migraciones para crear las tablas en la base de datos:  
npx sequelize-cli db:migrate  

### 6. Ejecutar seeders
npx sequelize-cli db:seed:all

### 7. Ejecutar el Servidor  
Inicia el servidor con el siguiente comando:  
npm start   

## Endpoints

### 1. Usuarios

#### Crear un Usuario

- **URL:** `/api/users`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "name": "Nombre del Usuario",
    "email": "email@example.com",
    "password": "contraseña_segura",
    "role": "tecnico"
  }
- **Respuesta Exitosa:**

    ***Código: 201 Created***
    ***Ejemplo de Respuesta:***
    ```json
  {
    "id": 9,
  "name": "Nombre del Usuario",
  "email": "email@example.com",
  "password": "$2a$10$XRFD4uqNa5mTnhiHUesShO2XZ0BIDUeqK0DyjbYpQ4zql5gNlK1bu",
  "role": "tecnico",
  "updatedAt": "2024-11-05T05:58:42.461Z",
  "createdAt": "2024-11-05T05:58:42.461Z"
  }

###  Autenticación de usuarios

- **URL:** `/api/users/login`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**

  ```json
  {
    "email": "email@example.com",
    "password": "contraseña_segura"
  }

**Respuesta Exitosa:**

   ***Código: 200 OK***
   ***Ejemplo de Respuesta:***

    ```json
    {
        "role": "tecnico",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzMwNzg2Mzk2LCJleHAiOjE3MzA3ODk5OTZ9.s0u79t1PU5Mfll6ZCixRoSBnTEkKGaKVSCm1bubZQpc"
    }


 
 ###  Obtener el perfil del usuario autenticado.

- **URL:** `/api/users/:id`
- **Método:** `GET`


**Respuesta Exitosa:**

   ***Código: 200 OK***
   ***Ejemplo de Respuesta:***

   
    ```json
    {
        "id": 1,
        "name": "Juan Perez",
        "email": "juan@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": "2024-10-31T13:27:46.000Z",
        "updatedAt": "2024-10-31T13:27:46.000Z"
        }

 ### 2. Dispositivos

#### Registrar un dispositivo

- **URL:** `/api/devices`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "marca": "Appl",
    "modelo": "iPhone 13",
    "tipo": "Smartphone",
    "numero_serie": "ABC123XYZ",
    "estado": "Pendiente"
  }
- **Respuesta Exitosa:**

    ***Código: 201 Created***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 18,
  "marca": "Appl",
  "modelo": "iPhone 13",
  "tipo": "Smartphone",
  "estado": "Pendiente",
  "updatedAt": "2024-11-05T06:14:28.106Z",
  "createdAt": "2024-11-05T06:14:28.106Z"
  }
#### Obtener todos los dispositivos registrados.

- **URL:** `/api/devices`
- **Método:** `GET`
 
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
    [
    {
        "id": 1,
        "marca": "Apple",
        "modelo": "iPhone 13",
        "tipo": "Smartphone",
        "número_serie": "ABC123XYZ",
        "estado": "En Reparación",
        "createdAt": "2024-10-31T13:27:46.000Z",
        "updatedAt": "2024-11-04T20:15:21.000Z"
    },
    {
        "id": 2,
        "marca": "Samsung",
        "modelo": "Galaxy S21",
        "tipo": "Smartphone",
        "número_serie": "XYZ789ABC",
        "estado": "En reparación",
        "createdAt": "2024-10-31T13:27:46.000Z",
        "updatedAt": "2024-10-31T13:27:46.000Z"
    }
    ]

#### Actualizar los datos de un dispositivo 

- **URL:** `/api/devices/:id`
- **Método:** `PUT`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "marca": "Google",
    "modelo": "Pixel 6",
    "tipo": "Smartphone",
    "número_serie": "PXL123456",
    "estado": "Pendiente"
}
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 18,
  "marca": "Google",
  "modelo": "Pixel 6",
  "tipo": "Smartphone",
  "número_serie": "PXL123456",
  "estado": "Pendiente",
  "createdAt": "2024-10-31T13:27:46.000Z",
  "updatedAt": "2024-10-31T13:27:46.000Z"
  }

#### Eliminar un dispositivo 

- **URL:** `/api/devices/:id`
- **Método:** `DELETE`
  
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "message": "Dispositivo eliminado correctamente"
  }
### 3. Ordenes de Reparación

#### Crear una orden de reparación

- **URL:** `/api/orders`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "fecha": "2024-10-31T13:27:46.000Z",
    "problema_reportado": "Pantalla rota",
    "id_dispositivo": 1, 
    "id_usuario": 2, 
    "costo_estimado": 150.00
  }
- **Respuesta Exitosa:**

    ***Código: 201 Created***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 17,
  "fecha": "2024-10-31T13:27:46.000Z",
  "problema_reportado": "Pantalla rota",
  "id_dispositivo": 1,
  "id_usuario": 2,
  "costo_estimado": 150,
  "updatedAt": "2024-11-05T06:36:08.277Z",
  "createdAt": "2024-11-05T06:36:08.277Z"
  }
#### Obtener todos las ordenes registradas.

- **URL:** `/api/orders`
- **Método:** `GET`
 
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  [
  {
    "id": 1,
    "fecha": "2024-10-31T13:27:46.000Z",
    "problema_reportado": "Pantalla rota",
    "id_dispositivo": 1,
    "id_usuario": 4,
    "costo_estimado": "150",
    "createdAt": "2024-10-31T13:27:46.000Z",
    "updatedAt": "2024-11-04T20:28:53.000Z",
    "tecnico": {
      "id": 4,
      "name": "quiroga",
      "email": "quiroga@quiroga.com"
    },
    "dispositivo": {
      "id": 1,
      "marca": "Apple",
      "modelo": "iPhone 13",
      "estado": "En Reparación"
    },
    "reparaciones": [
      {
        "id": 1,
        "fecha_inicio": "2024-10-31T13:27:46.000Z",
        "fecha_fin": null,
        "costo_real": "140"
      },
      {
        "id": 18,
        "fecha_inicio": "2024-11-04T20:15:21.000Z",
        "fecha_fin": null,
        "costo_real": null
      }
    ]
  }
 ]

#### Actualizar los datos de una orden de reparación 

- **URL:** `/api/orders/:id`
- **Método:** `PUT`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "fecha": "2024-10-31T13:27:46.000Z",
    "problema_reportado": "Problema con la batería",
    "id_dispositivo": 2,
    "id_usuario": 2,
    "costo_estimado": 100.00
}
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 17,
  "fecha": "2024-10-31T13:27:46.000Z",
  "problema_reportado": "Problema con la batería",
  "id_dispositivo": 2,
  "id_usuario": 2,
  "costo_estimado": 100,
  "createdAt": "2024-11-05T06:36:08.000Z",
  "updatedAt": "2024-11-05T06:40:43.065Z"
  }

  #### Eliminar una orden de reparación 

- **URL:** `/api/orders/:id`
- **Método:** `DELETE`
  
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "message": "Orden eliminada correctamente"
  }


### 4. Reparaciones

#### Registrar una reparación

- **URL:** `/api/repairs`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "fecha": "2024-10-31T13:27:46.000Z",
    "problema_reportado": "Pantalla rota",
    "id_dispositivo": 1, 
    "id_usuario": 2, 
    "costo_estimado": 150.00
  }
- **Respuesta Exitosa:**

    ***Código: 201 Created***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 19,
  "id_orden": 1,
  "fecha_inicio": "2024-11-05T06:40:43.065Z",
  "costo_real": 140,
  "updatedAt": "2024-11-05T06:46:36.848Z",
  "createdAt": "2024-11-05T06:46:36.848Z"
  }
#### Obtener todos las reparaciones registradas.

- **URL:** `/api/repairs`
- **Método:** `GET`
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  [
  {
    "id": 1,
    "id_orden": 1,
    "fecha_inicio": "2024-10-31T13:27:46.000Z",
    "fecha_fin": null,
    "costo_real": "140",
    "createdAt": "2024-10-31T13:27:46.000Z",
    "updatedAt": "2024-10-31T13:27:46.000Z",
    "ordenReparacion": {
      "id": 1,
      "problema_reportado": "Pantalla rota",
      "dispositivo": {
        "id": 1,
        "marca": "Apple",
        "modelo": "iPhone 13",
        "estado": "En Reparación"
      },
      "tecnico": {
        "id": 4,
        "name": "quiroga",
        "email": "quiroga@quiroga.com"
      }
    }
  }
 ]

#### Actualizar los datos de una reparación 

- **URL:** `/api/repairs/:id`
- **Método:** `PUT`
- **Cuerpo de la Solicitud:**
  ```json
  {
    "id_orden": 2,
    "fecha_inicio": "2024-10-31T13:27:46.000Z",
    "fecha_fin": null,
    "costo_real": "95"
}
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
  "id": 7,
  "id_orden": 2,
  "fecha_inicio": "2024-10-31T13:27:46.000Z",
  "fecha_fin": "2024-11-03T00:00:00.000Z",
  "costo_real": "95",
  "createdAt": "2024-10-31T13:56:59.000Z",
  "updatedAt": "2024-11-05T06:49:19.691Z"
  }

#### Eliminar una reparación 

- **URL:** `/api/repairs/:id`
- **Método:** `DELETE`
- **Respuesta Exitosa:**

    ***Código: 200 OK***
    ***Ejemplo de Respuesta:***
    ```json
  {
   "message": "Reparación eliminada correctamente"
  }


## Estructura del Proyecto
├── src  
│   ├── config  
│   │   └── config.json            # Configuración de la base de datos para Sequelize  
│   ├── controllers  
│   │   └── userController.js      # Controlador para manejar los usuarios  
│   ├── migrations  
│   │   └── [timestamp]-create-user.js  # Migración para crear la tabla de usuarios  
│   ├── models  
│   │   ├── index.js               # Configuración de la conexión de Sequelize  
│   │   └── user.js                # Definición del modelo User  
│   ├── routes  
│   │   └── userRoutes.js          # Rutas para la API de usuarios  
├── .env                           # Variables de entorno (DB credentials, etc.)  
├── createDatabase.js              # Crear database a traves de un archivo.js  
├── package.json                   # Dependencias del proyecto y scripts  
└── server.js                      # Configuración del servidor Express  





