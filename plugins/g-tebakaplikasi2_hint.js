let handler = async (m, { conn }) => {
    conn.tebakaplikasi2 = conn.tebakaplikasi2 ? conn.tebakaplikasi2 : {}
    let id = m.chat
    if (!(id in conn.tebakaplikasi2)) throw false
    let json = conn.tebakaplikasi2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hapl2$/i

handler.limit = true

export default handler