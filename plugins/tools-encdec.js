import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {

if (command == 'dec32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&decode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc32 ${text}`]
    ], m)
}

if (command == 'enc32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&encode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec32 ${text}`]
    ], m)
}

if (command == 'dec64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&decode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc64 ${text}`]
    ], m)
}

if (command == 'enc64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&encode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButton(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec64 ${text}`]
    ], m)
}


}
handler.command = handler.help = ['enc32', 'dec32', 'enc64', 'dec64']
handler.tags = ['tools']

export default handler