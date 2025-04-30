const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = 'Ashiya-MD';
        const repolink = `⭕ *𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 Github Repository*

> ❓❓❓❓❌❓

⭕ *𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 DIPLOY HEROKU*

> ❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓

⭕ *𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 WEB 📍*

> ❓❓❓❓❓❓❓❓

⭕ *WHATSAPP CHANNEL :*

> https://whatsapp.com/channel/0029VbACpjVGJP8Pvuy1nC3T

⭕ *Contact Owner :*

> wa.me/94760746437
            
`;

        return await conn.sendMessage(from, { 
            image: { url: "https://files.catbox.moe/2g0bq2.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398661137791@newsletter',
                    newsletterName: '𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
