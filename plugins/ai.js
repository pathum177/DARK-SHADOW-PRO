const { cmd } = require('../command');
const axios = require('axios');

// AI API වින්‍යාසය
const AI_APIS = {
  gpt: {
    name: 'AI',
    url: (query) => `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(query)}`,
    responseField: 'message',
    react: '🤖',
  },
  openai: {
    name: 'OpenAI',
    url: (query) => `https://vapis.my.id/api/openai?q=${encodeURIComponent(query)}`,
    responseField: 'result',
    react: '🧠',
  },
  deepseek: {
    name: 'DeepSeek AI',
    url: (query) => `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(query)}`,
    responseField: 'answer',
    react: '🧠',
  },
};

// AI සමඟ චැට් කිරීමේ පොදු ෆන්ෂන්
const chatWithAI = async (conn, mek, m, { from, q, reply, react }, aiConfig) => {
  try {
    // ආදාන වලංගුකරණය
    if (!q) {
      return reply(`💖 කරුණාකර ${aiConfig.name} සඳහා පණිවිඩයක් ලබාදෙන්න.\nඋදාහරණය: \`.${m.command} Hello\``);
    }
    if (q.length > 500) {
      return reply('❌ ආදානය ඉතා දිගුයි. කරුණාකර අක්ෂර 500ට අඩුවෙන් තබන්න.');
    }

    // සැකසීමේ රියැක්ෂන්
    await react('⏳');

    // API ඉල්ලීම කාලසීමාව සමඟ
    const { data } = await axios.get(aiConfig.url(q), { timeout: 10000 });

    // ප්‍රතිචාරය වලංගුදැයි පරීක්ෂා කිරීම
    if (!data || !data[aiConfig.responseField]) {
      await react('❌');
      return reply(`${aiConfig.name} ප්‍රතිචාර දීමට අපොහොසත් විය. කරුණාකර පසුව උත්සාහ කරන්න. 😒`);
    }

    // ප්‍රතිචාරය යැ�ීම
    await reply(`*${aiConfig.name} ප්‍රතිචාරය:*\n\n${data[aiConfig.responseField]}`);
    await react('✅');
  } catch (error) {
    console.error(`දෝෂය ${aiConfig.name} විධානයේ:`, error.message);
    await react('❌');
    return reply(`${aiConfig.name} සමඟ සන්නිවේදනයේදී දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.`);
  }
};

// විධාන නිර්වචන
cmd({
  pattern: 'a',
  alias: ['bot', 'dj', 'gpt', 'gpt4', 'bing'],
  desc: 'සාමාන්‍ය AI සමඟ චැට් කරන්න',
  category: 'ai',
  react: AI_APIS.gpt.react,
  filename: __filename,
}, async (conn, mek, m, { from, q, reply, react }) => {
  await chatWithAI(conn, mek, m, { from, q, reply, react }, AI_APIS.gpt);
});

cmd({
  pattern: 'openai',
  alias: ['chatgpt', 'opengpt'],
  desc: 'OpenAI සමඟ චැට් කරන්න',
  category: 'ai',
  react: AI_APIS.openai.react,
  filename: __filename,
}, async (conn, mek, m, { from, q, reply, react }) => {
  await chatWithAI(conn, mek, m, { from, q, reply, react }, AI_APIS.openai);
});

cmd({
  pattern: 'deepseek',
  alias: ['deep', 'seekai'],
  desc: 'DeepSeek AI සමඟ චැට් කරන්න',
  category: 'ai',
  react: AI_APIS.deepseek.react,
  filename: __filename,
}, async (conn, mek, m, { from, q, reply, react }) => {
  await chatWithAI(conn, mek, m, { from, q, reply, react }, AI_APIS.deepseek);
});
