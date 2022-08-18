import express from "express";
import autorController from "../controllers/autorController.js";

const router = express.Router();

router
    .get("/autor",autorController.listarautor)
    .get("/autor/:id",autorController.listraautorporID)
    .post("/autor",autorController.criaautor)
    .put("/autor/:id",autorController.atualizarautor)
    .delete("/autor/:id",autorController.excluirautor)

export default router;