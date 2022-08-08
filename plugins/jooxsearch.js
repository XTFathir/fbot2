import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let json = await fetch(`https://anabotofc.herokuapp.com/api/jooxsearch?apikey=AnaBot&query=${text}`)
        let jsons = await json.json()
        let caption = '*⎔┉━「 Search 」━┉⎔*'
        for (let x of jsons.result) {
        caption += `
        Album id : ${x.album_id}
ID : *${x.id}*
Judul : *${x.name}*
Album : ${x.album_name}
Artist : ${x.artist_list.name}
Img : ${x.images.url}
Vip : *${x.vip_flag}*
`}
        return m.reply(caption)
}

handler.command = handler.help = ['jooxs']
handler.tags = ['tools']

export default handler
