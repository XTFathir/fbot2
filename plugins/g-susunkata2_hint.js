let handler = async (m, { conn }) => {
    conn.susunkata2 = conn.susunkata2 ? conn.susunkata2 : {}
    let id = m.chat
    if (!(id in conn.susunkata2)) throw false
    let json = conn.susunkata2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hsus2$/i

handler.limit = true

export default handler