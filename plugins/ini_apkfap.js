import fetch from 'node-fetch'
let handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  
  if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Version : ${x.apps_version}
Rate : ${x.apps_rate}
Tag : ${x.apps_tag}
`}
        return m.reply(caption)
}

if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
`}
        return m.reply(caption)
}

if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Desc : ${x.desc}
`}
        return m.reply(caption)
}

if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
View : ${x.apps_views}
`}
        return m.reply(caption)
}

if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rate : ${x.apps_rate}
`}
        return m.reply(caption)
}

if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rilis : ${x.apps_released}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`}
        return m.reply(caption)
}

if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`}
        return m.reply(caption)
}

if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
Rilis : ${x.apps_upload}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`}
        return m.reply(caption)
}

if (command == 'uapkpro') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`}
        return m.reply(caption)
}

}
handler.command = handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['random']

export default handler