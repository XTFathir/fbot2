let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} noir helo
   *List Efek:*
balloon
beach-sign
blood_writing
bracelet
cemetery-gates
chalk_writing
christmas-writing
cookies_writing
denim-emdroidery
einstein
foggy_window_writing
fortune-cookie
frosty-window-writing
haunted-hotel
heart_tattoo
light-graffiti
lipstick-writing
love-lock
nightmare-writing
noir
pendant
plane-banner
sand_writing
snow-sign
soup_letters
street-sign
typewriter
water-writing
wooden_sign
yacht`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = `https://violetics.pw/api/photofunia/${thm}?apikey=beta&text=${text1}`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Photofunia 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

handler.command = /^(pfunia|pfun)$/i

export default handler