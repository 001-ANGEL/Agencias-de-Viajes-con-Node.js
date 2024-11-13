import { testimonial } from "../models/testimoniales.js";

const saveTestimonial = async (req, res) => {
  console.log(req.body);

  //Validar el formulario
  const { nombre, correo, mensaje } = req.body;

  const errors = [];

  if (nombre.trim() === "") {
    errors.push({ message: "El Nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errors.push({ message: "El Correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errors.push({ message: "El Mensaje esta vacio" });
  }

  if (errors.length > 0) {

    //Consultar testimoniales existentes
    const testimoniales = await testimonial.findAll();
    
    //Mostrar la vista cor errores
    res.render("testimoniales", {
      page: "Testimoniales",
      errors,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  } else {
    //Almacenarlo en la base de datos

    try {
      await testimonial.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveTestimonial };
