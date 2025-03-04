const express = require("express")

const { getResponse } = require("../controller/ai.controller")


const router =express.Router()

router.post("/get-review", getResponse)

module.exports = router