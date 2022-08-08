import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.susunkata2 = conn.susunkata2 ? conn.susunkata2 : {}
    let id = m.chat
    if (id in conn.susunkata2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.susunkata2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/asahotak')
    let json = await res.json()
    let caption = `
*Soal:* ${json.soal}

*Tipe:* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hsus2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.susunkata2[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['susunkata2', '/susunkata2']
            ], conn.susunkata2[id][0])
            delete conn.susunkata2[id]
        }, timeout)
    ]
}
handler.help = ['susunkata2']
handler.tags = ['game']
handler.command = /^susunkata2/i

export default handler

const buttons = [
    ['Hint', '/hsus2'],
    ['Nyerah', 'menyerah']
]