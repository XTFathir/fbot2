import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} id`
let json = await fetch(`https://newsapi.org/v2/top-headlines?country=${text}&apiKey=916be7f6341f4cd3991d4c3937707d30`)
        let jsons = await json.json()
        let caption = '*⎔┉━「 Search 」━┉⎔*'
        for (let x of jsons.articles) {
        caption += `
        Source : ${x.source.name}
Author : *${x.author}*
Judul : *${x.title}*
Desc : ${x.description}
Url : ${x.url}
Img : ${x.urlToImage}
Publish : *${x.publishedAt}*
`}
        return m.reply(caption)
}

handler.command = handler.help = ['news2']
handler.tags = ['random']

export default handler
