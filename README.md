# wine-supply-back

Nombres de archivos en "PascalCase", excepcion app.ts y index.ts.

# SCRIPTS

npm run dev: para usar nodemon, mira los cambios en el archivo index.ts

npm run build: para hacer el build, que va a transpilar todo a js

npm start: que corre node en index.js (que esta en el build), se puede usar una vez hecho el build

el archivo .env debe estar en la carpeta principal del repo, donde esta el README

# RUTAS

### RUTAS GET:

- **/wines** : Devuelve todos los vinos
- **/wines/categories** : Devuelve 4 vinos de cada cepa
- **/wines/recomendados** : Devuelve 10 vinos con mejor rating de la base de datos
- **/wines/filters** : Devuelve vinos mediante keys pasadas como querys, puede concatenar diferentes querys
- **/wines/search** : Función de busqueda mediante querys
- **/wine/:id** : Devuelve el vino con la id especificada por parametro

### RUTAS POST:

- **/admin/post** : Permite ingresar un vino en la base de datos

### RUTAS AUTH:

- **/login/** : Genera un Json Web Token y lo devuelve junto con informacion del usuario. Recibe información (email, password) por body.
- **/signup/** : Ingresa al usuario a la base de datos. Recibe información (name, email, password _-sujeto a cambios-_) por body.
- **/getuser/** : Ruta de testeo de funcionalidad token. Verifica el token ('Bearer token' en header) y devuelve info del usuario cuyo id se encuentra en el payload del token.
- **/user/update** : verifica token de usuario, actualiza las propiedades de user que recibe por req.body , realiza borrado logico si recibe isActive: false.
- **/address** : .get() - trae todos el user que coincide con el token
  .post() - user.address es array, se agrega la nueva direccion que viene viene por req.body. El manejo del address por default es automatico, si req.body.isDefault: true
  .put() - actualiza la direccion del usuario. Por req.body recibe el objeto con todos los campos de la direccion, y por req.query.index recibe el numero del indice donde se encuentra la direccion a cambiar.
  .delete() - si recibe por query erase = true, entonces elimina todas la direcciones del array. Si recibe por query index, indica el indice en el array de la direccion a eliminar

### RUTAS REVIEW:

- **/getUserReviews/** && **/getWineReviews/** : Trae todos los Reviews asociados al dato de la ruta, se debe enviar id como user_id ó wine_id según el caso.
- **/postReviews/** : Genera un nuevo Review y re-calcula el Rating para el vino asociado. Requiere user_id, wine_id, comment y rating.
- **/updateReviews/** : Actualiza el estado de un Review y re-calcula el Rating del vino asociado. Requiere review_id, wine_id, comment (si no se actualiza el comentario, volver a traer el aterior), rating (si no se actualiza el raiting, volver a traer el aterior).
- **/deleteReview/** : Realiza un borrado lógico actualizando el estado de un Review.isActive en **false** y re-calcula el Rating del vino asociado. Requiere user_id, wine_id.

### RUTAS PAYMENT:

- **/payment/** : Genera un link de pago, requiere del token y los datos de la compra en el header, en el caso de ser por checkout de carrito de compras se deben insertar en el header con el key *'items'*, en el caso de traterse de un producto individual se debe insertar como *'item'* tambien en el header.
- **/paymentsubs/** : Genera un link de pago recurrente, requiere del token el dato de la compra en el header, en el caso de la membresia regular debe tener el string *'Regular'* en un key llamado *'sub_type'* en el header.
- **/createorder/** : Genera una orden de compra que se carga en la base de datos (Ruta solo del back).
- **/getorders/** : Trae todas las ordenes de compras de un usuario, con su respectivos items. La dirección es la direccion default a la hora de realizar la compra.
- **/getcart/** : Trae los items del carro de compras del usuario cargado en la base de datos (No lo usamos todavia).
- **/addcartitem/** : Agrega un articulo al carro de compras del usuario (No lo usamos todavia).
- **/deletecartitem/** : Retira un item del carro de compras del usuario (No lo usamos todavia).

### RUTAS ADMIN:

- **/admin/post/** : Creación de vinos para la venta en el catalogo.
- **/admin/updatewine** : Edición de vinos.