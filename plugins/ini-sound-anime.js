import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, customPrefix }) => {

if (customPrefix == 'ara') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ara-ara.mp3`
await conn.sendFile(m.chat, vn, 'ara.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'ganbare') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ganbare-ganbare-senpai.mp3`
await conn.sendFile(m.chat, vn, 'ganbare.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'konichiwa') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/hashira-konichiwa.mp3`
await conn.sendFile(m.chat, vn, 'konichiwa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'nani') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/nani.mp3`
await conn.sendFile(m.chat, vn, 'nani.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'rikka') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/rikka-ow.mp3`
await conn.sendFile(m.chat, vn, 'rikka.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'ultra') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ultra-instinct.mp3`
await conn.sendFile(m.chat, vn, 'ultra.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'ahh') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yemete-kudasai-ah.mp3`
await conn.sendFile(m.chat, vn, 'ahh.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'yemete') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yemete-kudasai.mp3`
await conn.sendFile(m.chat, vn, 'yemete.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (customPrefix == 'yuno') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yuno-yukki.mp3`
await conn.sendFile(m.chat, vn, 'yuno.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

}
handler.customPrefix = ['ara', 'ganbare', 'konichiwa', 'nani', 'rikka', 'ultra', 'ahh', 'yemete', 'yuno']
handler.command = new RegExp

export default handler