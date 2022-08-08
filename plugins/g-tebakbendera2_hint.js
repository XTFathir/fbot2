let handler = async (m, { conn }) => {
    conn.tebakbendera2 = conn.tebakbendera2 ? conn.tebakbendera2 : {}
    let id = m.chat
    if (!(id in conn.tebakbendera2)) throw false
    let json = conn.tebakbendera2[id][1]
    conn.sendButton(m.chat, '```' + json.nama.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hben2$/i

handler.limit = true

export default handler