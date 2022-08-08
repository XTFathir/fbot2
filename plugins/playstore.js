import hxz from 'hxz-api')
import fetch from 'node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .playstore coc'
  let res = await hxz.playstore(text)
m.reply(`*PLAY STORE*

NAMA: ${res[0].name}
DEVELOPER: ${res[0].developer}
LINK: ${res[0].link}`)

}
handler.help = ['playstore <apk>']
handler.tags = ['internet']
handler.command = /^playstore$/i

export default handler
