import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

if (!text) return m.reply(`Example : ${usedPrefix + command} teks`)
if (!args[0]) return m.reply(`Example : ${usedPrefix + command} teks`)

if (command == 'hartacustom') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/hartacustom?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attp1') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/attp?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attp2') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/attp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}

if (command == 'ttp6') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp6?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'ttp5') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp5?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'ttp4') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp4?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'ttp3') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp3?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'ttp2') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp2?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'ttp1') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp?apikey=9b817532fadff8fc7cb86862&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}

if (command == 'ttpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg2') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'quotex') {
    let images = `https://violetics.pw/api/canvas/quotes?apikey=beta&text=${teks}&author=HinataMd`
        await conn.sendButton(m.chat, `${teks}`, author, images, [
                ['Next', `${usedPrefix}${command} ${teks}`]
            ], m)
}
if (command == 'tahta') {
let images = `https://violetics.pw/api/jimp/tahta?apikey=beta&text=${teks}`
                await conn.sendButton(m.chat, `${teks}`, author, images, [
                ['Next', `${usedPrefix}${command} ${teks}`]
            ], m)
}

}
handler.command = handler.help = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'attp1', 'attp2', 'hartacustom']
handler.tags = ['sticker']
export default handler