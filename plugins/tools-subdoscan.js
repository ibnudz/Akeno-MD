import axios from "axios";

let handler = async (m, { conn, args, usedPrefix }) => {
  if (!args[0])
    throw `*Contoh*\n${usedPrefix}subdo google.com`;

  let apiKey = "caliphkey"; // Ganti dengan API key yang valid
  let host = args[0];

  let apiUrl =
    `https://api.caliph.biz.id/api/scan/subdomain?host=${encodeURIComponent(host)}&apikey=${apiKey}`;

  try {
    let response = await axios.get(apiUrl);
    let result = response.data.result;

    if (result && Array.isArray(result) && result.length > 0) {
      let domainList = result.map(domainInfo => {
        let dnsInfo = domainInfo.dns ? domainInfo.dns.join(", ") : "Tidak ada informasi DNS";
        return `\nDomain: ${domainInfo.domain}\nDNS: ${dnsInfo}\nCloudflare Proxy: ${domainInfo.cf_proxy}`;
      }).join("\n\n");

      await m.reply("Sedang diproses...");
      await m.reply(`Info Domain:${domainList}`);
    } else {
      throw "Data domain tidak ditemukan atau tidak valid.";
    }
  } catch (error) {
    console.error(error);
    throw "Terjadi kesalahan saat mengambil data dari API.";
  }
};

// Contoh penggunaan: .scan caliph.my.id

handler.help = ["subdo"];
handler.tags = ["tools"];
handler.premium = true;
handler.register = true;
handler.command = /^(subdo|scan)$/i;

export default handler;
