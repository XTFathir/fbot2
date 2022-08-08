let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] MASUKKAN @tag ORANG YANG INGIN ANDA TAMBAHKAN KE PENGGUNA PREMIUM*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] PENGGUNA YANG TERMASUK SUDAH MENJADI PENGGUNA PREMIUM*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} SEKARANG ANDA ADALAH PENGGUNA PREMIUM, ANDA TIDAK AKAN MEMILIKI BATAS KETIKA MENGGUNAKAN BOT*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(addprem)$/i
handler.group = true

export default handler