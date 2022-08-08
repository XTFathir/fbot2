import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebaktebakan[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hasa untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebaktebakan[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebaktebakan', '/tebaktebakan']
            ], conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan/i

export default handler

const buttons = [
    ['Hint', '/hteb'],
    ['Nyerah', 'menyerah']
]