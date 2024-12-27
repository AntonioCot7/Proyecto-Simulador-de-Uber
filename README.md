# 🚖 Proyecto Simulador de Uber - Backend y Frontend

Este proyecto consiste en una aplicación web básica que simula las funcionalidades principales de Uber. Fue desarrollado siguiendo principios de diseño y arquitectura limpia para el backend, con una interfaz moderna y funcional para el frontend.

---

## Backend 📦

### Tecnologías utilizadas

- **Lenguaje:** Java
- **Framework:** Spring Boot
- **Base de datos:** PostgreSQL
- **Contenerización:** Docker
- **Arquitectura:**
  - **Infrastructure**
  - **DTO (Data Transfer Object)**
  - **Domain**
  - **Application**
  - **Service**
  - **Controller**

### Configuración para ejecutar el backend

Asegúrate de modificar las siguientes variables en el archivo de configuración `application.properties` o `.env` según corresponda:

```bash
spring.profiles.active=dev
spring.datasource.url=jdbc:postgresql://${PG_HOST}:${PG_PORT}/${POSTGRES_DB}
spring.datasource.username=${PGUSER}
spring.datasource.password=${PGPASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
logging.level.org.springframework.security.web=DEBUG
db.backup.path=/backend/db/db_backup_springboot.sql
jwt.secret=${JWTSECRET}
```
### Ejecución del backend
1. Clona el repositorio.
2. Navega a la carpeta `backend`.
3. Configura las variables de entorno necesarias para la base de datos y JWT.
4. Ejecuta el comando:
   ```bash
   ./mvnw spring-boot:run
   ```
5. Accede al backend en: http://localhost:8080.

---

## Frontend 🖥️

### Tecnologías utilizadas

- **Framework:** React + Vite
- **Librerías:** Axios, TailwindCSS, Cypress
- **Lenguajes:** JavaScript, HTML, CSS

### Organización de carpetas 📂

El proyecto de **fronend** está organizado de la siguiente manera:

``` markdown
frontend/
├── cypress/              # Carpeta de Cypress (Testing)
│ └── e2e/                # Archivos de testing 
├── node_modules/         # Dependencias del proyecto
├── public/               # Archivos estáticos de la aplicación
├── src/                  # Archivos de código fuente de la aplicación 
│ ├── assets/             # Archivos multimedia 
│ ├── components/         # Componentes de la aplicación
│ ├── layout/             # Componentes plantilla de la aplicación
│ ├── pages/              # Páginas principales
│ ├── service/            # Archivos de configuración de Axios
│ ├── styles/             # Estilos globales y de componentes
│ │ └── index.css
│ ├── App.jsx             # Archivo principal 
│ └── main.jsx            # Archivo de inicialización          
├── .gitignore
├── cypress.config.js     # Archivo de configuración de Cypress 
├── index.html            # Archivo HTML principal
├── package.json          # Archivo de configuración de dependencias
├── tailwind.config.js    # Archivo de configuración de Tailwind
└── vite.config.js        # Archivo de configuración de Vite
```

### Configuración para ejecutar el frontend

1. Navega a la carpeta `frontend`.
2. Instala las dependencias con el comando:
   ```bash
   npm install
   ```
3. Configura los puertos para el desarrollo local:
  - Frontend: `localhost:3000`
  - APIs Backend: `localhost:8080`
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Accede al frontend en: `http://localhost:3000`.

---

## Fetchs disponibles 🔄
| **Función**      | **Método HTTP** | **Request Body**           | **Backend URI**  | **Response Body**          |
|------------------|-----------------|----------------------------|------------------|----------------------------|
| fetchLogin       | POST            | `LoginReq`                 | /auth/login      |                            |
| fetchRegister    | POST            | `RegisterReq`              | /auth/register   |                            |
| getPassenger     | GET             |                            | /passenger/me    | `PassengerSelfResponseDTO` |
| getDriver        | GET             |                            | /driver/me       | `DriverResponseDto`        |
| getRidesByUser   | GET             | page, size                 | /ride/user       | `Page<RidesByUserDto>`     |
| updatePassenger  | PATCH           | `passengerSelfResponseDTO` | /passenger/me    |                            |
| updateDriverInfo | PATCH           | id, `NewDriverInfoDto`     | /driver/{id}     | String                     |
| updateDriverCar  | PATCH           | id, `VehicleBasicDto`      | /driver/{id}/car | String                     |
| deletePassenger  | DELETE          | id                         | /passenger/{id}  |                            |
| deleteDriver     | DELETE          | id                         | /driver/{id}     |                            |

---

## 📄 **Licencia**

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente.
