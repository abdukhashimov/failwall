require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome");
});

// const mongoUrl =
//   "mongodb+srv://madiyor:<password>@cluster0.jpxt2.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
