let handler = async (m, { conn }) => {
    conn.tebaklagu2 = conn.tebaklagu2 ? conn.tebaklagu2 : {}
    let id = m.chat
    if (!(id in conn.tebaklagu2)) throw false
    let json = conn.tebaklagu2[id][1]
    conn.sendButton(m.chat, '```' + json.judul.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hlag2$/i

handler.limit = true

export default handler