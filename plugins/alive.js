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
        const status = `╭━━〔 *DARK-SHADOW-MD* 〕━━┈⊷
┃✯╭─────────────·๏
┃✯┃• *👋Hi*: ${pushname} 《Im alive now》 
┃✯┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃✯┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃✯┃• *👨‍💻 Owner*:Pathum Malsara 
┃✯└───────────┈⊷
╰──────────────┈⊷
  *DARK SHADOW Multidevice Whatsapp Bot.*

> *👾 : 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*
*╭┈───────────╴╴╴•⟢*
*|https://whatsapp.com/channel/0029Vb7bwXEEAKWNJgBICJ0w
*
*╰┈───────────╴╴╴•⟢*
> *👾 : 𝐂𝐎𝐍𝐓𝐀𝐂𝐓*
*╭┈───────────╴╴╴•⟢*
*│wa.me/94773416478*
*╰┈───────────╴╴╴•⟢*
> 👾 : Official Website 
 ╭┈───────────╴╴╴•⟢*
*│???????????????*
*╰┈───────────╴╴╴•⟢*
> *👾 : REPO*
*╭┈───────────╴╴╴•⟢*
*│*???????????????????*
*╰┈───────────╴╴╴•⟢*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ*


`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://telegra.ph/file/1ece2e0281513c05d20ee.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363409414874042@newsletter',
                    newsletterName: 'DARK SHADOW',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
