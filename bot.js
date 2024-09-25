import { Telegraf } from "telegraf"; 

const TOKEN = "8053237082:AAFNaMzsfyfV0JkNEpWUtJHgGycnvXCXl3o";
const bot = new Telegraf(TOKEN);

const web_link = "https://it-start-pizza.netlify.app/";

bot.start((ctx) => 
  ctx.reply("Assalomu Alaykum , It-Start tomonidan yaratilgan botga xush kelipsiz", {
    reply_markup: {
      inline_keyboard: [[{ text: "Open App", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
