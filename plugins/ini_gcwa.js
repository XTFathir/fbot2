import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
 
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    
    let json = await fetch(`https://api-xcoders.xyz/api/search/groupwa?query=${text}&apikey=xcoders`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
*Nama* : ${x.nama}
*Link :* ${x.link}
`}
        return m.reply(caption)

}
handler.command = handler.help = ['gcwa']
handler.tags = ['random']
export default handler