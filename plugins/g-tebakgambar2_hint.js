let handler = async (m, { conn }) => {
    conn.tebakgambar2 = conn.tebakgambar2 ? conn.tebakgambar2 : {}
    let id = m.chat
    if (!(id in conn.tebakgambar2)) throw false
    let json = conn.tebakgambar2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hgam2$/i

handler.limit = true

export default handler