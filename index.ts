require('dotenv').config();
import { Client } from "discord.js";

console.log("Mecha Jangles is online!");

const client = new Client({
    intents: []
});

client.login(process.env.token);