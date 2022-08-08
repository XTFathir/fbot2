let handler = async (m, { conn }) => {
    conn.tebakkalimat2 = conn.tebakkalimat2 ? conn.tebakkalimat2 : {}
    let id = m.chat
    if (!(id in conn.tebakkalimat2)) throw false
    let json = conn.tebakkalimat2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hkal2$/i

handler.limit = true

export default handler