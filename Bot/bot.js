import { Telegraf } from "telegraf"; 

const TOKEN = "8114052817:AAGDBFfc9s80j2gosWWQWLuon1SiUUib6dc";
const bot = new Telegraf(TOKEN);

const web_link = "https://it-start-pizza.netlify.app/";

bot.start((ctx) => 
  ctx.reply("Assalomu Alaykum , It-Start tomonidan yaratilgan botga xush kelipsiz", {
    reply_markup: {
      keyboard: [[{ text: "Fibo Pizza", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
