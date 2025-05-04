const config = require ('../config')
const {cmd, commands} = require ('../command')
const date = new Date();
    const slstDate = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Colombo" }));
    const formattedDate = `${slstDate.getFullYear()}/${slstDate.getMonth() + 1}/${slstDate.getDate()}`;
    const formattedTime = slstDate.toLocaleTimeString();
    
    const hour = slstDate.getHours();
    const greetings = hour < 12 ? 'සුබ උදෑසනක්..🌅' :
                     hour < 15 ? 'සුබ දහවලක්..🌞' :
                     hour < 18 ? 'සුබ හැන්දෑවක්..🌆' : 'සුබ රාත්රියක්..🌙';
    
  cmd({
      pattern:"time",
      alias:["clock"],
      react:"⌚",
      desc:"chek now time",
      filename: __filename
      
  },
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    let about =`┏━━━━━━━━━━━━━━━━✑✓
    ┃🌈 ඔයාට ${greetings}
    ┃⏰ දැන් වෙලාව ${formattedTime}
    ┃🗓️ අද දිනේ ${formattedDate}
    ┗━━━━━━━━━━━━━━━━✑✓
> *👾 : 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*
*╭┈───────────╴╴╴•⟢*
*│https://whatsapp.com/channel/0029VbACpjVGJP8Pvuy1nC3T*
*╰┈───────────╴╴╴•⟢*
> *👾 : 𝐂𝐎𝐍𝐓𝐀𝐂𝐓*
*╭┈───────────╴╴╴•⟢*
*│wa.me/94760746437*
*╰┈───────────╴╴╴•⟢*
> 👾Official Website 
 ╭┈───────────╴╴╴•⟢*
*│* *❌❌❌❌❌❌❌❌*
*╰┈───────────╴╴╴•⟢*
> *👾 : *REPO*
*╭┈───────────╴╴╴•⟢*
*│* *❓❓❓❓❓❓❓❓*
*╰┈───────────╴╴╴•⟢*
   🄿🄾🅆🄴🅁🄳 🅱🆈 𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 🥷💗 `
    

    return await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/553zxh.jpg`},caption:about, 
        contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363398661137791@newsletter',
      newsletterName: '𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃',
      serverMessageId: 999,
        thumbnailUrl: "https://files.catbox.moe/553zxh.jpg",
        renderLargerThumbnail: true,
        showAdAttribution: true
    }
     }
}, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
