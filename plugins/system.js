const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "💻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `╭━━〔 *𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃* 〕━━┈⊷
┃✯╭─────────────·๏
┃✯┃• *⏳ 𝗨𝗽𝘁𝗶𝗺𝗲:-* ${runtime(process.uptime())}
┃✯┃• *📟 𝗥𝗮𝗺:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃✯┃• *⚙️ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿:-* ${os.hostname()}
┃✯┃• *👨‍💻 𝗢𝘄𝗻𝗲𝗿:-* 𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 🥷
┃✯│• *🥷 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗻𝗯:-* 94760746437
┃✯└───────────┈⊷
╰──────────────┈⊷

> *𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 🥷🇱🇰*
`
return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
