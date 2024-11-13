import { Viaje } from "../models/Viaje.js";

//Creando un controlador
const homePage = (req, res) => {
  res.render("inicio", {
    page: "Inicio",
  });
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

const testimonialsPage = (req, res) => {
  res.render("testimoniales", {
    page: "Testimoniales",
  });
};

// Muestra un viaje por su slug
const tripPageDetails = async (req, res) => {
  const { viaje } = req.params;

  try {
    const result = await Viaje.findOne({ where: { slug: viaje } });

    res.render("viaje", {
      page: "Informacion Viaje",
      result
    });
  } catch (error) {
    console.log(error);
  }
};

export { homePage, aboutPage, travelPage, testimonialsPage, tripPageDetails };
