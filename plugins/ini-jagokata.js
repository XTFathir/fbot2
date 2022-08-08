import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw 'Kata apa?'

let res = await quotes(text)
let x = res.data
  await conn.sendButton(m.chat, `*Quote:*
${x.quote}

${x.bio}
${x.author}
`, m, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)

}
handler.command = handler.help = ['kata']
handler.tags = ['quotes']

export default handler

function quotes(input) {
	return new Promise((resolve, reject) => {
		fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
				if (data.length == 0) return resolve({ creator: 'Hinata-Md', status: false })
				resolve({ creator: 'Hinata-Md', status: true, data })
			}).catch(reject)
	})
}