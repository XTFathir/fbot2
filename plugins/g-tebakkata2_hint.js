let handler = async (m, { conn }) => {
    conn.tebakkata2 = conn.tebakkata2 ? conn.tebakkata2 : {}
    let id = m.chat
    if (!(id in conn.tebakkata2)) throw false
    let json = conn.tebakkata2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hkat2$/i

handler.limit = true

export default handler