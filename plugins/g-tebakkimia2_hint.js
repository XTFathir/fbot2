let handler = async (m, { conn }) => {
    conn.asahotak2 = conn.asahotak2 ? conn.asahotak2 : {}
    let id = m.chat
    if (!(id in conn.asahotak2)) throw false
    let json = conn.asahotak2[id][1]
    conn.sendButton(m.chat, '```' + json.unsur.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hkim2$/i

handler.limit = true

export default handler