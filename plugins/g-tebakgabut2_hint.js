let handler = async (m, { conn }) => {
    conn.tebakgabut2 = conn.tebakgabut2 ? conn.tebakgabut2 : {}
    let id = m.chat
    if (!(id in conn.tebakgabut2)) throw false
    let json = conn.tebakgabut2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hgab2$/i

handler.limit = true

export default handler