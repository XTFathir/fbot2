import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakkimia2 = conn.tebakkimia2 ? conn.tebakkimia2 : {}
    let id = m.chat
    if (id in conn.tebakkimia2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakkimia2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/tebakkimia')
    let json = await res.json()
    let caption = `
Unsur apakah jika *${json.lambang}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hkim2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakkimia2[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, author, null, [
                ['tebakkimia2', '/tebakkimia2']
            ], conn.tebakkimia2[id][0])
            delete conn.tebakkimia2[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia2']
handler.tags = ['game']
handler.command = /^tebakkimia2/i

export default handler

const buttons = [
    ['Hint', '/hkim2'],
    ['Nyerah', 'menyerah']
]