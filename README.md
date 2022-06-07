# DWCLE-CRUD

## TODO (PRIORITY)

-   Mover la configuración de TypeOrm del archivo app.module.ts a database.module.ts. (3)
-   Validaciones contra la base de datos. (Class-validator y Class-transformer) (2)

## COMMANDS

-   Start backend: npm run start:dev
-   Start frontend: ng serve --open

## INFO

-   Archivo .mapper.ts: Se usa para trasnformar de entity a dto y viceversa.
-   Archivo .entity.ts: Se usa para indicar las tablas de la base de datos.
-   Archivo .dto.ts: Se usa para mover conjunto de datos.
-   Archivo .repository.ts: Se usa para usar los métodos contra la base de datos.
-   Archivo .service.ts: Se usa de intermediaro entre el archivo .entity.ts y el archivo .controller.ts.

## Packages

### NestJS

-   --save @nestjs/config: Tratamiento de variables de entorno.
-   --save @nestjs/typeorm typeorm mysql: Tratamiento de base de datos.
-   --save @nestjs/swagger swagger-ui-express: Facilita info de la Api y permite realizar pruebas.
-   class-validator class-transformer: Validación de los metodos de entrada a la base de datos.

### Angular

-   ng add @angular/material
-   --save @nestjs/passport passport @nestjs/jwt passport-jwt bcrypt
-   --save-dev @types/passport-jwt @types/bcrypt

-   Nombres de archivos del backend en singular/plural (?)
