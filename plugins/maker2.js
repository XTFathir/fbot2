let handler = async(m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`
  let teksnya = urut[0]
  let teksnya2 = urut[1]
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "pubg", rowId: usedPrefix + 'oxy2 pubg ' + teksnya + '|' + teksnya2},
{title: "slidetext", rowId: usedPrefix + 'oxy2 slidetext ' + teksnya + '|' + teksnya2},
{title: "glitch", rowId: usedPrefix + 'oxy2 glitch ' + teksnya + '|' + teksnya2}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.m,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['maker2 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker2)$/i
export default handler