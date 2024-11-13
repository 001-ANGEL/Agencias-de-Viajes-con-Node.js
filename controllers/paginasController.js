import { Viaje } from "../models/Viaje.js";
import { testimonial } from "../models/testimoniales.js";

//Creando un controlador
const homePage = async (req, res) => {

  //Consultar 3 viajes del modelo viaje
  const promiseDB = [];

  promiseDB.push( Viaje.findAll({limit: 3}))
  promiseDB.push( testimonial.findAll({limit: 3}))
  try {
    const result = await Promise.all(promiseDB);

    res.render("inicio", {
      page: "Inicio",
      classHome: "home",
      viajes: result[0],
      testimoniales: result[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const aboutPage = (req, res) => {
  res.render("nosotros", {
    page: "Nosotros",
  });
};

const travelPage = async (req, res) => {
  //Constultar base de datos
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    page: "Próximos Viajes",
    viajes,
  });
};

const testimonialsPage = async (req, res) => {
  try {
    const testimoniales = await testimonial.findAll();
    res.render("testimoniales", {
      page: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

// Muestra un viaje por su slug
const tripPageDetails = async (req, res) => {
  const { viaje } = req.params;

  try {
    const result = await Viaje.findOne({ where: { slug: viaje } });

    res.render("viaje", {
      page: "Informacion Viaje",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { homePage, aboutPage, travelPage, testimonialsPage, tripPageDetails };
