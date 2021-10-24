const { Router } = require('express')
const { getUsers, postUsers, getUserUid, putUserUid, deleteUserUid } = require('../controller/usersController')

const router = Router()

// aqui vai as requisições
router.get("/", getUsers)
router.post("/", postUsers)
router.get("/:uid", getUserUid)
router.put("/:uid", putUserUid)
router.delete("/:uid", deleteUserUid)

module.exports = router