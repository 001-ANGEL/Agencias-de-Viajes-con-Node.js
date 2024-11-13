import express from "express";
import {
  homePage,
  aboutPage,
  travelPage,
  testimonialsPage,
  tripPageDetails,
} from "../controllers/paginasController.js";

import { saveTestimonial } from "../controllers/testimonial.js";

const router = express.Router();

//req: lo que enviamos - res: lo que express responde
router.get("/", homePage);

router.get("/nosotros", aboutPage);

router.get("/viajes", travelPage);

router.get("/viajes/:viaje", tripPageDetails);

router.get("/testimoniales", testimonialsPage);
router.post("/testimoniales", saveTestimonial);

export default router;
