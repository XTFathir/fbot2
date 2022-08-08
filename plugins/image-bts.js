let handler = async (m, { conn }) => {
let api-hyzer = `https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`
    conn.sendButton(m.chat, api-hyzer, 'Nih', 'NEXT', '.bts', m)
}
handler.help = ['bts']
handler.tags = ['asupan', 'image']
handler.command = /^(bts)$/i

export default handler