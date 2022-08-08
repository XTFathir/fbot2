
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, author, null, [
                ['Mulaiabsen', `${usedPrefix}mulaiabsen`]
            ], m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    
await conn.sendButton(m.chat, `*Tanggal:* ${date}
${conn.absen[id][2]}

*「 Sudah absen 」*
*Total:* ${absen.length}
${list}
`, author, null, [
        ['absen', `${usedPrefix}absen`],
        ['cekabsen', `${usedPrefix}cekabsen`]
    ], m)
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
export default handler
