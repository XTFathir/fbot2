let handler = async (m, { conn }) => {
    conn.tebaklucu2 = conn.tebaklucu2 ? conn.tebaklucu2 : {}
    let id = m.chat
    if (!(id in conn.tebaklucu2)) throw false
    let json = conn.tebaklucu2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hluc2$/i

handler.limit = true

export default handler