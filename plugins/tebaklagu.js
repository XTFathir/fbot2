import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebaklagu[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    // if (!json.status) throw json
    let caption = `
TEBAK JUDUL LAGU
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}hlag* untuk bantuan
Bonus: ${poin} XP
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, author, null, [
                ['tebaklagu', '/tebaklagu']
            ], conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu/i

export default handler

const buttons = [
    ['Hint', '/hlag'],
    ['Nyerah', 'menyerah']
]