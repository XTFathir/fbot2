import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'ceritahoror') {
let res = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=9b817532fadff8fc7cb86862`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Judul:* ${has.title}
  *Desc:* ${has.desc}
  *Story:* ${has.story}`, author, has.thumbnail, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'growiki') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} magplant`

let res = await fetch(`https://api.lolhuman.xyz/api/growiki?apikey=9b817532fadff8fc7cb86862&query=${text}`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Name:* ${has.name}
  *Desc:* ${has.desc}
  *prop:* ${has.prop}
  *info:* ${has.info}
  *Story:* ${has.prop}
`, author, has.img, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'growstocks') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} magplant`

let res = await fetch(`https://api.lolhuman.xyz/api/growstocks?apikey=9b817532fadff8fc7cb86862&query=${text}`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Name:* ${has.name}
  *Desc:* ${has.desc}
  *price status:* ${has.price_status}
  *demand status:* ${has.demand_status}
  *source:* ${has.source}
  *edited:* ${has.edited}
`, author, has.img, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'gsearch') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} magplant`

let res = await fetch(`https://api.lolhuman.xyz/api/gsearch?apikey=9b817532fadff8fc7cb86862&query=${text}`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Name:* ${has.title}
  *Desc:* ${has.desc}
  *price status:* ${has.link}
`, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'gsmarena') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} oppo`

let res = await fetch(`https://api.lolhuman.xyz/api/gsmarena?apikey=9b817532fadff8fc7cb86862&query=${text}`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Name:* ${has.phone_name}
  *Speed:* ${has.specification.network.speed}
  *Launch:* ${has.specification.launch.status}
  *Body:* ${has.specification.body.build}
  *Dis status:* ${has.specification.display.displaytype}
  *Plat:* ${has.specification.platform.os}
  ${has.specification.platform.chipset}
  ${has.specification.platform.cpu}
  *Mem:* ${has.specification.memory.internalmemory}
  *Batre:* ${has.specification.battery.batdescription1}
`, author, has.phone_image, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'jadwalbola') {
let json = await fetch(`https://api.lolhuman.xyz/api/jadwalbola?apikey=9b817532fadff8fc7cb86862`)
  let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let has of jsons.result) {
        caption += `
        *Hari:* ${has.hari}
  *Jam:* ${has.jam}
  *Event:* ${has.event}
  *Match:* ${has.match}
  *Tv:* ${has.tv}
  `}
        return m.reply(caption)
}

if (command == 'jadwaltv') {
let json = await fetch(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=9b817532fadff8fc7cb86862`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let has of jsons.result) {
        caption += `
  *antv:* ${has.antv}
  *gtv:* ${has.gtv}
  *indosiar:* ${has.indosiar}
  *inewstv:* ${has.inewstv}
  *kompastv:* ${has.kompastv}
  *metrotv:* ${has.metrotv}
  *mnctv:* ${has.mnctv}
  *nettv:* ${has.nettv}
  *rcti:* ${has.rcti}
  *rtv:* ${has.rtv}
  *sctv:* ${has.sctv}
  *trans7:* ${has.trans7}
  *tvone:* ${has.tvone}
  *tvri:* ${has.tvri}
  `}
        return m.reply(caption)
}

if (command == 'jalantikus') {
let json = await fetch(`https://api.lolhuman.xyz/api/jalantikus?apikey=9b817532fadff8fc7cb86862`)
let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let has of jsons.result) {
        caption += `
  *Name:* ${has.title}
  *time:* ${has.time}
  *link:* ${has.link}
  *category:* ${has.category}
  `}
        return m.reply(caption)
}

if (command == 'jaraktempuh') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} aceh banten`

let json = await fetch(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=9b817532fadff8fc7cb86862&kota1=${args[0]}&kota2=${args[1]}`)
let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
  *Dari:* ${x.from.name}
*Ke:* ${x.to.name}

*Jarak:* ${x.jarak}
*kereta api:* ${x.kereta_api}
*pesawat:* ${x.pesawat}
*mobil:* ${x.mobil}
*motor:* ${x.motor}
*jalan kaki:* ${x.jalan_kaki}
  `}
        return m.reply(caption)
}

if (command == 'random') {
const sections = [
    {
	title: "Theme",
	rows: [
	{title: "ahegao", rowId: usedPrefix + 'dlrandom ahegao'},
{title: "animearmpits", rowId: usedPrefix + 'dlrandom animearmpits'},
{title: "animebooty", rowId: usedPrefix + 'dlrandom animebooty'},
{title: "animefeets", rowId: usedPrefix + 'dlrandom animefeets'},
{title: "animethighss", rowId: usedPrefix + 'dlrandom animethighss'},
{title: "biganimetiddies", rowId: usedPrefix + 'dlrandom biganimetiddies'},
{title: "blowjob", rowId: usedPrefix + 'dlrandom blowjob'},
{title: "chiisaihentai", rowId: usedPrefix + 'dlrandom chiisaihentai'},
{title: "ecchi", rowId: usedPrefix + 'dlrandom ecchi'},
{title: "hentai4everyone", rowId: usedPrefix + 'dlrandom hentai4everyone'},
{title: "hentaifemdom", rowId: usedPrefix + 'dlrandom hentaifemdom'},
{title: "hentai", rowId: usedPrefix + 'dlrandom hentai'},
{title: "hololewd", rowId: usedPrefix + 'dlrandom hololewd'},
{title: "lewdanimegirls", rowId: usedPrefix + 'dlrandom lewdanimegirls'},
{title: "loli", rowId: usedPrefix + 'dlrandom loli'},
{title: "milf", rowId: usedPrefix + 'dlrandom milf'},
{title: "neko", rowId: usedPrefix + 'dlrandom neko'},
{title: "sideoppai", rowId: usedPrefix + 'dlrandom sideoppai'},
{title: "trap", rowId: usedPrefix + 'dlrandom trap'},
{title: "waifu", rowId: usedPrefix + 'dlrandom waifu'},
{title: "yaoi", rowId: usedPrefix + 'dlrandom yaoi'}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah nsfw lagi`,
  footer: global.m,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Random Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

if (command == 'random2') {
const sections = [
    {
	title: "Theme",
	rows: [
	{title: "anal", rowId: usedPrefix + 'dlrandom2 anal'},
{title: "baka", rowId: usedPrefix + 'dlrandom2 baka'},
{title: "bj", rowId: usedPrefix + 'dlrandom2 bj'},
{title: "blowjob", rowId: usedPrefix + 'dlrandom2 blowjob'},
{title: "classic", rowId: usedPrefix + 'dlrandom2 classic'},
{title: "cuddle", rowId: usedPrefix + 'dlrandom2 cuddle'},
{title: "cum", rowId: usedPrefix + 'dlrandom2 cum'},
{title: "cum_jpg", rowId: usedPrefix + 'dlrandom2 cum_jpg'},
{title: "ero", rowId: usedPrefix + 'dlrandom2 ero'},
{title: "erofeet", rowId: usedPrefix + 'dlrandom2 erofeet'},
{title: "erok", rowId: usedPrefix + 'dlrandom2 erok'},
{title: "erokemo", rowId: usedPrefix + 'dlrandom2 erokemo'},
{title: "eron", rowId: usedPrefix + 'dlrandom2 eron'},
{title: "eroyuri", rowId: usedPrefix + 'dlrandom2 eroyuri'},
{title: "feed", rowId: usedPrefix + 'dlrandom2 feed'},
{title: "feet", rowId: usedPrefix + 'dlrandom2 feet'},
{title: "feetg", rowId: usedPrefix + 'dlrandom2 feetg'},
{title: "femdom", rowId: usedPrefix + 'dlrandom2 femdom'},
{title: "fox_girl", rowId: usedPrefix + 'dlrandom2 fox_girl'},
{title: "futanari", rowId: usedPrefix + 'dlrandom2 futanari'},
{title: "gasm", rowId: usedPrefix + 'dlrandom2 gasm'},
{title: "hentai", rowId: usedPrefix + 'dlrandom2 hentai'},
{title: "holo", rowId: usedPrefix + 'dlrandom2 holo'},
{title: "holoero", rowId: usedPrefix + 'dlrandom2 holoero'},
{title: "hololewd", rowId: usedPrefix + 'dlrandom2 hololewd'},
{title: "kemonomimi", rowId: usedPrefix + 'dlrandom2 kemonomimi'},
{title: "keta", rowId: usedPrefix + 'dlrandom2 keta'},
{title: "kiss", rowId: usedPrefix + 'dlrandom2 kiss'},
{title: "kuni", rowId: usedPrefix + 'dlrandom2 kuni'},
{title: "les", rowId: usedPrefix + 'dlrandom2 les'},
{title: "lewd", rowId: usedPrefix + 'dlrandom2 lewd'},
{title: "lewdk", rowId: usedPrefix + 'dlrandom2 lewdk'},
{title: "lewdkemo", rowId: usedPrefix + 'dlrandom2 lewdkemo'},
{title: "neko", rowId: usedPrefix + 'dlrandom2 neko'},
{title: "ngif", rowId: usedPrefix + 'dlrandom2 ngif'},
{title: "nsfw_avatar", rowId: usedPrefix + 'dlrandom2 nsfw_avatar'},
{title: "nsfw_neko_gif", rowId: usedPrefix + 'dlrandom2 nsfw_neko_gif'},
{title: "poke", rowId: usedPrefix + 'dlrandom2 poke'},
{title: "pussy", rowId: usedPrefix + 'dlrandom2 pussy'},
{title: "pussy_jpg", rowId: usedPrefix + 'dlrandom2 pussy_jpg'},
{title: "random_hentai_gif", rowId: usedPrefix + 'dlrandom2 random_hentai_gif'},
{title: "smug", rowId: usedPrefix + 'dlrandom2 smug'},
{title: "solo", rowId: usedPrefix + 'dlrandom2 solo'},
{title: "solog", rowId: usedPrefix + 'dlrandom2 solog'},
{title: "tickle", rowId: usedPrefix + 'dlrandom2 tickle'},
{title: "tits", rowId: usedPrefix + 'dlrandom2 tits'},
{title: "trap", rowId: usedPrefix + 'dlrandom2 trap'},
{title: "waifu", rowId: usedPrefix + 'dlrandom2 waifu'},
{title: "wallpaper", rowId: usedPrefix + 'dlrandom2 wallpaper'},
{title: "yuri", rowId: usedPrefix + 'dlrandom2 yuri'}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah nsfw lagi`,
  footer: global.m,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Random Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

}
handler.command = handler.help = ['ceritahoror', 'growiki', 'growstocks', 'gsearch', 'gsmarena', 'jadwalbola', 'jadwaltv', 'jalantikus', 'jaraktempuh', 'random', 'random2']
handler.tags = ['random']

export default handler