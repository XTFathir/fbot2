import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.caklontong2 = conn.caklontong2 ? conn.caklontong2 : {}
    let id = m.chat
    if (id in conn.caklontong2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.caklontong2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/caklontong')
    let json = await res.json()
    let caption = `
${json.question}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hcak2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.caklontong2[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.answer}*\n${json.detail} `, author, null, [
                ['caklontong2', '/caklontong2']
            ], conn.caklontong2[id][0])
            delete conn.caklontong2[id]
        }, timeout)
    ]
}
handler.help = ['caklontong2']
handler.tags = ['game']
handler.command = /^caklontong2/i

export default handler

const buttons = [
    ['Hint', '/hcak2'],
    ['Nyerah', 'menyerah']
]