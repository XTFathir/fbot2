let handler = async (m, { conn }) => {
    conn.tebakkabupaten2 = conn.tebakkabupaten2 ? conn.tebakkabupaten2 : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten2)) throw false
    let json = conn.tebakkabupaten2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hkab2$/i

handler.limit = true

export default handler