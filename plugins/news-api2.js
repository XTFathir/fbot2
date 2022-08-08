import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh:
${usedPrefix + command} category
*List:*
antara
bbc
cnbc
cnn
daily
detik
fajar
idn
indozone
inews
kompas
kontan
kumparan
merdeka
metro
okezone
republika
sindo
tempo
tribun
viva`

let json = await fetch(`https://dhn-api.herokuapp.com/api/news/${text}?apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = '*⎔┉━「 Search 」━┉⎔*'
        for (let x of jsons.result) {
        caption += `
        *Source :* ${x.berita_url}
Berita : ${x.berita}
`}
        return m.reply(caption)
}

handler.command = handler.help = ['news']
handler.tags = ['random']

export default handler
