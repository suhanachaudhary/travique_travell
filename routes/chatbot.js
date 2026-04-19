
const express = require("express");
const { sendChat } = require("../controllers/chatbot");
const router = express.Router();

router.post("/chat", sendChat);
module.exports = router;