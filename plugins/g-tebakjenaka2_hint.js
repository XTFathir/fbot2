let handler = async (m, { conn }) => {
    conn.tebakjenaka2 = conn.tebakjenaka2 ? conn.tebakjenaka2 : {}
    let id = m.chat
    if (!(id in conn.tebakjenaka2)) throw false
    let json = conn.tebakjenaka2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hjen2$/i

handler.limit = true

export default handler