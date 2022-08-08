let handler = async (m, { conn }) => {
    conn.tebaklirik2 = conn.tebaklirik2 ? conn.tebaklirik2 : {}
    let id = m.chat
    if (!(id in conn.tebaklirik2)) throw false
    let json = conn.tebaklirik2[id][1]
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hlir2$/i

handler.limit = true

export default handler