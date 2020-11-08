require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const { messageStart } = require("./messages");

const {
  backEnd,
  backEndAction,
  frontEnd,
  frontEndAction,
  mobile,
  mobileAction,
  just,
  justAction,
} = require("./buttons");

const bot = new Telegraf(process.env.BOT_TOKEN);

const inlineMessageKeyBoard = Markup.inlineKeyboard([
  Markup.callbackButton(backEnd, backEndAction),
  Markup.callbackButton(frontEnd, frontEndAction),
  Markup.callbackButton(mobile, mobileAction),
  Markup.callbackButton(just, justAction),
]).extra();

bot.start((ctx) => {
  ctx.telegram.sendMessage(ctx.from.id, messageStart, inlineMessageKeyBoard);
});

bot.action(backEndAction, (ctx) => {
  ctx.editMessageText("Back End in Action");
  ctx.telegram.sendMessage(
    ctx.from.id,
    "I will be asking some questions about your recent failure\nQuestions: \n1. What failure you had (for a title)?\n2. What tool were you using?\n3. What happened?\n4. Conclusion"
  );
  ctx.telegram.sendMessage(ctx.from.id, "1. What failure you had (max: 100 words)")
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
