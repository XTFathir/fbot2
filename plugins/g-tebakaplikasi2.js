import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakaplikasi2 = conn.tebakaplikasi2 ? conn.tebakaplikasi2 : {}
    let id = m.chat
    if (id in conn.tebakaplikasi2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakaplikasi2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/tebakaplikasi')
    let json = await res.json()
    let caption = `
${json.note}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hapl2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakaplikasi2[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakaplikasi2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebakaplikasi2', '/tebakaplikasi2']
            ], conn.tebakaplikasi2[id][0])
            delete conn.tebakaplikasi2[id]
        }, timeout)
    ]
}
handler.help = ['tebakaplikasi2']
handler.tags = ['game']
handler.command = /^tebakaplikasi2/i

export default handler

const buttons = [
    ['Hint', '/hapl2'],
    ['Nyerah', 'menyerah']
]