const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : 'Ping..10%' , edit : ping.key })
await conn.sendMessage(from, { text : 'Ping..30%' , edit : ping.key })
await conn.sendMessage(from, { text : 'Ping..50%' , edit : ping.key })
await conn.sendMessage(from, { text : 'Ping..80%' , edit : ping.key })
await conn.sendMessage(from, { text : 'Ping..100%' , edit : ping.key })

return await conn.sendMessage(from, { text : '❗ > *Pong ' + (𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃) + ' Ms 🥷🍷* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
