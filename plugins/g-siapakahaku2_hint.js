let handler = async (m, { conn }) => {
    conn.siapakahaku2 = conn.siapakahaku2 ? conn.siapakahaku2 : {}
    let id = m.chat
    if (!(id in conn.siapakahaku2)) throw false
    let json = conn.siapakahaku2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hsia2$/i

handler.limit = true

export default handler