import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} spy`)
  let json = await fetch(`https://wabotin.com/anime?type=detail&uri=${text}`)
  let jsons = await json.json()
  let x = jsons.data
  conn.sendButton(m.chat, `*${x.info}*`, author, x.img, [['animes', `${usedPrefix}animes`]], m)
}
handler.help = ['animes'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(animes)$/i

export default handler