import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakanime2 = conn.tebakanime2 ? conn.tebakanime2 : {}
    let id = m.chat
    if (id in conn.tebakanime2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakanime2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/tebakanime')
    let json = await res.json()
    let caption = `
${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hani2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakanime2[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanime2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebakanime2', '/tebakanime2']
            ], conn.tebakanime2[id][0])
            delete conn.tebakanime2[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime2']
handler.tags = ['game']
handler.command = /^tebakanime2/i

export default handler

const buttons = [
    ['Hint', '/hani2'],
    ['Nyerah', 'menyerah']
]