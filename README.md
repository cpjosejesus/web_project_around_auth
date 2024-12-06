# Tripleten Web Project Around Auth

## Descripción del Proyecto
Este proyecto es una aplicación web que permite la autenticación de usuarios y la gestión de sus perfiles. Los usuarios pueden registrarse, iniciar sesión y actualizar su información personal.

## Características

- Edición de perfil de usuario: Permite a los usuarios editar su perfil con facilidad. Los cambios se actualizan tanto en la interfaz de usuario como en el servidor.

- Visualización de lugares de interés: Presenta lugares de interés con títulos e imágenes atractivas. Al hacer clic en una tarjeta, se puede ver una descripción más detallada.

- Agregar nuevos lugares: Los usuarios pueden agregar nuevos lugares de interés mediante un formulario interactivo. Los datos se envían al servidor para su almacenamiento.

- Interacción con tarjetas: Los usuarios pueden dar "like" a las tarjetas de lugares, y se muestra un contador de likes. También se pueden eliminar tarjetas, y estos cambios se reflejan tanto en la interfaz de usuario como en el servidor.

- Diseño Responsivo: La página es responsiva y se adapta a diferentes tamaños de pantalla, con soporte para anchos de ventana de 320px a 1280px.

## Tecnologías Utilizadas
- React
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)

## Usabilidad

- Editar el perfil de usuario
- Agregar nuevos lugares de interés
- Interactuar con tarjetas
- Cerrar popups
- Visualizar información detallada
- Registro y Autorización

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm dev`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se recargará cuando hagas cambios.\
También puedes ver cualquier error de lint en la consola.

### `npm test`

Lanza el corredor de pruebas en modo interactivo de observación.\
Consulta la sección sobre [ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## Endpoints

### Autenticación
- `POST /signup`: Registra un nuevo usuario.
- `POST /login`: Inicia sesión de un usuario existente.
- `POST /logout`: Cierra la sesión del usuario actual.

### Perfil de Usuario
- `GET /users/me`: Obtiene la información del perfil del usuario autenticado.

## Funcionalidades de los endpoints mostrados
- Registro de usuarios con validación de datos.
- Inicio de sesión con autenticación basada en tokens.
- Cierre de sesión seguro.
- Visualización y actualización del perfil del usuario autenticado.
