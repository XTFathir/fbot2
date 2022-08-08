let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] MASUKKAN @tag ORANG YANG INGIN DIHAPUS DARI PENGGUNA PREMIUM*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] PENGGUNA YANG DIMASUKKAN BUKAN PENGGUNA PREMIUM*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} SEKARANG ITU BUKAN LAGI BAGIAN DARI PENGGUNA PREMIUM*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(delprem)$/i
handler.group = true

export default handler