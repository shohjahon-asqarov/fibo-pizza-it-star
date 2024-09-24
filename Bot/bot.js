import { Telegraf } from "telegraf"; 

const TOKEN = "7597621232:AAHLq56dsPNeK1iHy3bJP1cnJwAYzQwUdL8";
const bot = new Telegraf(TOKEN);

const web_link = "https://it-start-pizza.netlify.app/";

bot.start((ctx) => 
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "It Start WebApp", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
