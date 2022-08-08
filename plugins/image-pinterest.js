import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix + command} minecraft`
  const json = await pinterest(text)
  conn.sendButton(m.chat, json.getRandom(), 'pinterest.jpg', `
*Hasil pencarian*
${text}
`.trim(), 'Nih', 'NEXT', '.pinterest', m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

export default handler