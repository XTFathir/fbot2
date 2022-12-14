import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'main': 'ðððĒð§',
  'game': 'ðððĶð',
  'rpg': 'ððð ðððĶððŽ',
  'xp': 'ððð & ððĒðĶðĒð­',
  'sticker': 'ðð­ðĒððĪððŦ',
  'kerang': 'ðððŦðð§ð  ððĢððĒð',
  'quotes': 'ððŪðĻð­ððŽ',
  'admin': 'ðððĶðĒð§',
  'group': 'ððŦðĻðŪðĐ',
  'internet': 'ðð§ð­ððŦð§ðð­',
  'anonymous': 'ðð§ðĻð§ðēðĶðĻðŪðŽ ððĄðð­',
  'nulis': 'ððð ððŦððŪðĨðĒðŽ',
  'downloader': 'ððĻð°ð§ðĨðĻððððŦ',
  'tools': 'ððĻðĻðĨðŽ',
  'canvas': 'ððð§ðŊððŽ',
  'fun': 'ððŪð§',
  'database': 'ððð­ððððŽð',
  'quran': 'ððĨ ððŪðŦ\'ðð§',
  'owner': 'ðð°ð§ððŦ',
  'maker': 'ðððĪððŦ',
  'advanced': 'ðððŊðð§ððð',
  'audio': 'ððŪððĒðĻ', 
  'premium': 'ððŦððĶðĒðŪðĶ', 
  'info': 'ðð§ððĻ'
}
const defaultMenu = {
  before: `â­âââââââââââââ âÛŠÛŠā―īā―ŧâļ
â ã %me ã
â ðððŦðĒðĶððĪððŽðĒðĄ ððŪðððĄ
â ððð§ð ð ðŪð§ððĪðð§ ððĻð­ ðĒð§ðĒ
â ðððĶðĻð ð ðĄððŦðĒðĶðŪ ðĶðð§ðēðð§ðð§ð ðĪðð§
â°âŽâââââââââââââ âģđ
ââĪâĶâ ðððĶð: %name!
âââĶâ ððĒðĶðĒð­: %limit Limit
âââĶâ ðððĪð­ðŪ: %time
âââĶâ ððĻð­ððĨ ððĐ: %totalexp
âââĶâ ððĻðĨð: %role
ââ°âââââââââââââ âģđ
â ððð­ððððŽð: %rtotalreg of %totalreg
âââââââââââââââââ
â ððĐð­ðĒðĶð: %uptime (%muptime)
â°âââââââââââââ âÛŠÛŠā―īā―ŧâļ

`.trimStart(),
  header: 'â­âââââââââââââ âÛŠÛŠā―īā―ŧâļ\nâ ã %category ã\nâ°âŽâââââââââââââ âģđ\nââĪ #JanganDispam',
  body: 'âââĶâ %cmd %islimit %isPremium',
  footer: 'ââ°âââââââââââââ âģđ\nâ ððð§ð ð ððĨ: %week, %date \nâ°âââââââââââââ âÛŠÛŠā―īā―ŧâļ',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({})))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    conn.sendHydrated(m.chat, text.trim(), author, thumbmenu, sig, 'Instagram', `+${global.ownernumber}`, 'Number Owner', [
      ['ððĐððð', '/ping'],
      ['ððŦððð­ðĻðŦ', '/owner']
    ], m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}