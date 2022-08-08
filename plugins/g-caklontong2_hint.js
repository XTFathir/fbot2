let handler = async (m, { conn }) => {
    conn.caklontong2 = conn.caklontong2 ? conn.caklontong2 : {}
    let id = m.chat
    if (!(id in conn.caklontong2)) throw false
    let json = conn.caklontong2[id][1]
    conn.sendButton(m.chat, '```' + json.answer.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hcak2$/i

handler.limit = true

export default handler