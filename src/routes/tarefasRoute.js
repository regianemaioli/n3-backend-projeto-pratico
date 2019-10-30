const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

//criando rotas
router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/:nome/buscar", controller.getNomeColaborador)
router.get("/concluidos/filtrar", controller.getConcluidos)

//tornar a rota disponivel
module.exports = router