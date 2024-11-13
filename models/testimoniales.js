import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const testimonial = db.define("testimoniales", {
  //Objeto de configuracion
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});
