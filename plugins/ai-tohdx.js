import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
import uploadFile from "../lib/uploadFile.js";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw "Send Foto Dengan Caption .tohd";
  m.reply(wait);
  let media = await q.download();
  let url = await uploadFile(media);
  let hasil = await (
    await fetch(
      `https://api.xyroinee.xyz/api/ai/remini?url=${url}&apikey=${global.xyro}`
    )
  ).buffer();
  await conn.sendFile(m.chat, hasil, "", "_Nih Kak Hasilnya_", m);
};
handler.help = ["tohdx"];
handler.tags = ["ai"];
handler.command = /^(tohdx)$/i;
handler.limit = true;

export default handler;
