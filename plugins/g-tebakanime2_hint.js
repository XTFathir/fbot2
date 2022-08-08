let handler = async (m, { conn }) => {
    conn.tebakanime2 = conn.tebakanime2 ? conn.tebakanime2 : {}
    let id = m.chat
    if (!(id in conn.tebakanime2)) throw false
    let json = conn.tebakanime2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hani2$/i

handler.limit = true

export default handler