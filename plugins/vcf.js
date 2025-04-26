//*GROUP-VCF-CONTACTS-SENDER*
//*Credits Is Gone To Danuzz ( DanuXz )*  ☃️❤️‍🩹

const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "vcf",
  desc: "Generate and send VCF file with group members' phone numbers",
  use: ".groupvcf",
  category: "group",
  react: "📇",
  filename: __filename
}, async (conn, mek, m, { from, q, isGroup, groupMetadata, participants, isOwner, isAdmins, groupAdmins, reply }) => {
  try {
    if (!isGroup) {
      return reply("*`This command can only be used in Groups 🚩`*");
    }
    if (!isOwner && !isAdmins) {
      return reply("*`This command is only for the Bot owner or Admins 🚩`*");
    }
    if (!participants || participants.length === 0) {
      return reply("*`There are no members in this Group 🚩`*");
    }

    // Initial content for the VCF file
    let vcfContent = "BEGIN:VCARD\nVERSION:3.0\n";

    // Adding all members' phone numbers to the VCF format
    for (let participant of participants) {
      const number = participant.id.split('@')[0]; // Getting the number from the JID
      const name = participant.notify || "Unknown Contact"; // Member's name or "Unknown Contact"

      vcfContent += `BEGIN:VCARD\nVERSION:3.0\nN:${name};;;\nFN:${name}\nTEL;TYPE=CELL:${number}\nEND:VCARD\n`;
    }

    vcfContent += "END:VCARD";

    // Creating and saving the VCF file
    const fileName = `group_contacts_${Date.now()}.vcf`;
    fs.writeFileSync(fileName, vcfContent);

    // Sending the VCF file to the Group
    await conn.sendMessage(from, {
      document: { url: fileName },
      mimetype: "text/vcard",
      fileName: `contacts.vcf`,
      caption: `*✅ Successfully generated and sent the VCF file with all members' phone numbers from the Group! 👥*\n\n\n*GROUP NAME:* ${groupMetadata.subject}\n\n*MEMBERS:* ${participants.length}\n\n*Your Bot Name 👀*`
    }, { quoted: mek });

    // Deleting the initial file
    fs.unlinkSync(fileName);

  } catch (error) {
    console.error("Error in VCF file generation:", error);
    reply("*`An error occurred. Please try again 🤒`*");
  }
});
