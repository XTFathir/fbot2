let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} gravity helo
  *List Efek:*
burnpaper
butterfly
coffecup
coffee
doubleheart
flaming
grass
gravity
lovemessage
lovetext
naruto
oceansea
quotewood
rainbow
romantic
shadow
smoke`)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://api-xcoders.xyz/api/photooxy/${thm}?text=${text1}&apikey=xcoders`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Photooxy 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

handler.command = /^(oxy|photooxy)$/i

export default handler