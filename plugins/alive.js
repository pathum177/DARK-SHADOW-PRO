const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🎭",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *Ashiya_MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋Hi*: ${pushname} 《Im alive n¤w》 
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*:Chethiya 
┃◈└───────────┈⊷
╰──────────────┈⊷
  *𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 Multidevice Whatsapp Bot.*

> *👾 : 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*
*╭┈───────────╴╴╴•⟢*
*|https://whatsapp.com/channel/0029VbACpjVGJP8Pvuy1nC3T*
*╰┈───────────╴╴╴•⟢*
> *👾 : 𝐂𝐎𝐍𝐓𝐀𝐂𝐓*
*╭┈───────────╴╴╴•⟢*
*│wa.me/94760746437*
*╰┈───────────╴╴╴•⟢*
> 👾 : Official Website 
 ╭┈───────────╴╴╴•⟢*
*│???????????????*
*╰┈───────────╴╴╴•⟢*
> *👾 : REPO*
*╭┈───────────╴╴╴•⟢*
*│*???????????????????*
*╰┈───────────╴╴╴•⟢*
> *𝗣𝗼𝘄𝗲𝗿𝗱 𝗯𝘆 𝐀𝐘𝐄𝐒𝐇 🥷🇱🇰*


`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/iohaf4.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398661137791@newsletter',
                    newsletterName: 'Ashiya_MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
