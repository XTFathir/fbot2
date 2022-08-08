import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} spy`)
  let json = await fetch(`https://wabotin.com/anime?type=getlink&uri=${text}`)
  let jsons = await json.json()
  let x = jsons.data.links.provider
 
 m.reply(`
*${x.name}*
*${x.link}*
`.trim())
}
handler.help = ['animed'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(animed)$/i

export default handler