require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const inlineMessageMarkup = Markup.inlineKeyboard([
  Markup.callbackButton('')
])

bot.start((ctx) => {
  ctx.reply("Welcome", );
});

bot.launch();
// const mongoUrl =
//   "mongodb+srv://madiyor:<password>@cluster0.jpxt2.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";


/**
 * 1. BackEndBug
 * 2. FrontEndBug
 * 3. Just a Bug
 * 
 * 1. The tool name you were using
 * 2. Failure you had
 * 3. What did you learn?
 * 
 * 1. First Name Lastname
 */