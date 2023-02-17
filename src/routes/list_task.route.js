const router = require("express").Router()

const { all, find, create, update, destroy } = require("../controllers/list_task.controller")

const { createBookValidation } = require("../middlewares/validation.middleware")


router.post("/",createBookValidation, create)
router.get("/", all)
router.get("/:id", find)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router