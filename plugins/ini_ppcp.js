import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let res = await fetch(`https://api-xcoders.xyz/api/random/ppcouple?apikey=xcoders`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'Cewe', m, json.result.ppcwe, [['🔄 Next 🔄', `/${command}`]], m)
conn.sendButton(m.chat, 'Cowo', m, json.result.ppcwo, [['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['pepek']
handler.command = /^(pepek)$/i

export default handler