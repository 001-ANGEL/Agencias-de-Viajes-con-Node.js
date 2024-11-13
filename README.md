AGENCIA DE VIAJES

Este es un proyecto básico para una Agencia de Viajes desarrollado en Node.js, Express y Sequelize con el objetivo de aprender sobre la estructura MVC y el uso de bases de datos en aplicaciones web.

---Descripción
La aplicación permite a los usuarios explorar la agencia y conocer detalles de viajes disponibles. También cuenta con una página de "Testimoniales" donde los clientes pueden dejar sus comentarios y experiencias. Utiliza Express para la gestión del servidor y Sequelize para interactuar con una base de datos MySQL.

---Características
Página de Inicio: Presentación general de la agencia.
Página Nosotros: Información sobre la agencia.
Página de Viajes: Lista de viajes disponibles con detalles específicos.
Página de Testimoniales: Formulario para agregar testimoniales y visualización de los mismos.

---Tecnologías Utilizadas
Node.js y Express para la creación del servidor y rutas.
Sequelize para interactuar con la base de datos MySQL.
Pug como motor de plantillas para generar las vistas.
Nodemon para facilitar el desarrollo reiniciando el servidor automáticamente con cada cambio.

---Estructura del Proyecto
La organización de archivos sigue el patrón MVC (Modelo, Vista, Controlador):

/config: Configuración de Sequelize para la base de datos.
/controllers: Lógica de negocio de cada página de la aplicación.
/models: Definición de modelos Sequelize para interactuar con la base de datos.
/routes: Rutas de la aplicación para manejar las peticiones de cada página.
/views: Plantillas Pug para las páginas principales.
/public: Archivos estáticos como CSS y JS.


---Instalación
Clona este repositorio:
git clone <URL_DEL_REPOSITORIO>
cd agencia-viajes

---Instala las dependencias:
npm install
Configura la base de datos en MySQL y crea una base de datos llamada agenciaviajes.
Configura tus credenciales de base de datos en el archivo config/database.js.
Corre las migraciones o sincroniza los modelos para que se creen las tablas necesarias:
node index.js

---Ejecución
Para iniciar el servidor, usa el siguiente comando:
npm run dev
Esto iniciará el servidor en http://localhost:4000.

---Uso
Formulario de Testimoniales: El formulario permite a los usuarios enviar sus testimonios. Los datos son procesados y almacenados en la base de datos mediante una petición POST.
Página de Viajes: Los detalles de cada viaje se extraen de la base de datos y se muestran dinámicamente en la vista de viajes.

---Rutas de la Aplicación
/: Página de Inicio.
/nosotros: Información sobre la agencia.
/viajes: Muestra los viajes disponibles.
/testimoniales: Página de testimoniales con formulario para agregar comentarios.