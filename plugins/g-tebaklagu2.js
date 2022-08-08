import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklagu2 = conn.tebaklagu2 ? conn.tebaklagu2 : {}
    let id = m.chat
    if (id in conn.tebaklagu2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebaklagu2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/tebaklagu')
    let json = await res.json()
    let caption = `
Tebak judul lagu dibawah ini :
Artist: ${json.artist}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hlag2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebaklagu2[id] = [
        await conn.sendButton(m.chat, caption, author, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=inferno-logo&doScale=false&scaleWidth=400&scaleHeight=400&fontsize=50&fillTextType=0&backgroundColor=black&text=${command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, author, null, [
                ['tebaklagu2', '/tebaklagu2']
            ], conn.tebaklagu2[id][0])
            delete conn.tebaklagu2[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu2']
handler.tags = ['game']
handler.command = /^tebaklagu2/i

export default handler

const buttons = [
    ['Hint', '/hlag2'],
    ['Nyerah', 'menyerah']
]