import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} spy`
  let json = await fetch(`https://wabotin.com/anime?type=query&query=${text}`)
  let jsons = await json.json()
        let x = jsons.data
  m.reply(`
*${x.title}*
${x.link}
`.trim())
}
handler.help = ['animeq'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(animeq|animequ)$/i

export default handler