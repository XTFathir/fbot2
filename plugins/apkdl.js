import fetch from "node-fetch"
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

let pes = await fetch(`https://nzcha-apii.herokuapp.com/apk-search?q=${text}`)
let res = await pes.json()
let x = res.result
	 	let hasil = `
Nama App : ${x.name}
Link : ${x.url}
Download : ${x.dl_url}
Desc : ${x.desc}
`.trim()
let image = x.thumb
    conn.sendButton(m.chat, image, hasil,'Menu', '.menu', m)
}
handler.help = ['rexdl apk']
handler.tags = ['tools']
handler.command = /^(apkdl)$/i

export default handler
