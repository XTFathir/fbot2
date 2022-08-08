let handler = async (m, { conn }) => {
    conn.tebaktebakan2 = conn.tebaktebakan2 ? conn.tebaktebakan2 : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan2)) throw false
    let json = conn.tebaktebakan2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hkan2$/i

handler.limit = true

export default handler