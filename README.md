# wine-supply-back

Nombres de archivos en "PascalCase", excepcion app.ts y index.ts.

# SCRIPTS

npm run dev: para usar nodemon, mira los cambios en el archivo index.ts

npm run build: para hacer el build, que va a transpilar todo a js

npm start: que corre node en index.js (que esta en el build), se puede usar una vez hecho el build

el archivo .env debe estar en la carpeta principal del repo, donde esta el README

# RUTAS

### RUTAS GET:
* **/wines** : Devuelve todos los vinos
* **/wines/categories** : Devuelve 4 vinos de cada cepa
* **/wines/recomendados** : Devuelve 10 vinos con mejor rating de la base de datos
* **/wines/filters** : Devuelve vinos mediante keys pasadas como querys, puede concatenar diferentes querys
* **/wines/search** : Función de busqueda mediante querys
* **/wine/:id** : Devuelve el vino con la id especificada por parametro

### RUTAS POST:
* **/admin/post** : Permite ingresar un vino en la base de datos

### RUTAS AUTH:
* **/login/** : Genera un Json Web Token y lo devuelve junto con informacion del usuario. Recibe información (email, password) por body.
* **/signup/** : Ingresa al usuario a la base de datos. Recibe información (name, email, password _-sujeto a cambios-_) por body.
* **/getuser/** : Ruta de testeo de funcionalidad token. Verifica el token ('Bearer token' en header) y devuelve info del usuario cuyo id se
encuentra en el payload del token.