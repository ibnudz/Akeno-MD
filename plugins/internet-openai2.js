import axios from "axios";

let handler = async (m, { conn, args, usedPrefix }) => {
  if (!args[0])
    throw `*Contoh*\n${usedPrefix}chatgpt2 apa itu resi`;

  let apiKey = "caliphkey"; // Ganti dengan API key yang valid
  let text = args.join(" "); // Menggabungkan semua argumen menjadi satu teks
  let encodedText = encodeURIComponent(text); // Mengkodekan teks

  let apiUrl =
    "https://api.caliph.biz.id/api/ai/oai-gpt?q=" +
    encodedText +
    "&apikey=" +
    apiKey;

  try {
    let response = await axios.get(apiUrl);
    let result = response.data.result;

    await m.reply("Sedang diproses...");
    await m.reply(result); // Mengirim informasi dari JSON ke pengguna
  } catch (error) {
    console.error(error);
    throw "Terjadi kesalahan saat mengambil data dari API.";
  }
};

// Contoh penggunaan:
// !resi apa itu resi


// Contoh penggunaan:
// !resi https://skizo.tech/api/openai?text=apa%20itu%20resi&apikey=xxxxx
handler.help = ["chatgpt2"];
handler.tags = ["openai"];
handler.command = /^(chatgpt2)$/i;
handler.limit = true;

export default handler;
