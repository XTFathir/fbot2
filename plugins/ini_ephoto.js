let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} cake teks
  *List Efek:*
american
anonymous
aov
arrow2
arrow
blackpink
cake
caper
cloth
cloud
coverpubg
crank
dragonfire
eraser
foggy
glasses
graffiti
greenbrush
hallowen
horror
incandescent
leafgraphy
letters
metals
ml
neonblue
neonbp
nightstars
pig
pubgavatar
puppy
sunlight
television
tiger
typography2
typography
warface
water`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://api-xcoders.xyz/api/ephoto/${thm}?text=${text1}&apikey=xcoders`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Ephoto1 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

handler.command = /^(epho|ephoto)$/i

export default handler