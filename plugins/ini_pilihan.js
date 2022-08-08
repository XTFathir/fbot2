
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
  if (command == 'edit1') {
  let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`Balas gambar dengan perintah`)
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List efek:*
    ps4
gay
joke
jail
blur
rmbg
burn
crush
badut
sepia
frame
trash
scary
wanted
circle
invert
badut3
wasted
glitch
thanos
delete
emboss
badut2
distort
iphonex
toonify
rejected
facepalm
stickbug
approved
brazzers
dictator
beautiful
karenhave
communism
greyscale
spongebob
instagram
moustache
animeface
triggered
challenger
discordhouse
tobecontinue
missionpassed`)
  let img = await q.download?.()
  let url = await uploadImage(img)
    let images = `https://api-xcoders.xyz/api/maker/animeface?url=${url}&apikey=xcoders`
    
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
   if (command == 'edit2') {
   let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`Balas gambar dengan perintah`)
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List Efek:*
    opinion
facebook
captcha`)

   let img = await q.download?.()
    let url = await uploadImage(img)
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
    let images = `https://api-xcoders.xyz/api/maker/${thm}?text=${text1}&url=${url}&apikey=xcoders`
    
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
          
          if (command == 'edit3') {
          if (!mime) return m.reply(`Balas gambar dengan perintah`)
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} efek
    *List Efek:*
    ttp
ttp3
attp
tahta
facts
biden
carbontext
sertitolol
caution
kannagen
styletext
trumptweet
ssmap`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
    let images = `https://api-xcoders.xyz/api/maker/${thm}?text=${text1}&apikey=xcoders`
    
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
          
          
}
//lo mau apa??
handler.command = handler.help = ['edit1', 'edit2', 'edit3']
handler.tags = ['maker']
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}