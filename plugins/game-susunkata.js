import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  ${json.soal}
  ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hsus untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['susunkata', '/susunkata']
            ], conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

export default handler

const buttons = [
    ['Hint', '/hsus'],
    ['Nyerah', 'menyerah']
]