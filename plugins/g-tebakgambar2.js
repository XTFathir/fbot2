import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakgambar2 = conn.tebakgambar2 ? conn.tebakgambar2 : {}
    let id = m.chat
    if (id in conn.tebakgambar2) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakgambar2[id][0])
        throw false
    }
    let res = await fetch('https://kuontol-api.herokuapp.com/api/game/tebakgambar')
    let json = await res.json()
    let caption = `
${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgam2 untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgambar2[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar2[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['tebakgambar2', '/tebakgambar2']
            ], conn.tebakgambar2[id][0])
            delete conn.tebakgambar2[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar2']
handler.tags = ['game']
handler.command = /^tebakgambar2/i

export default handler

const buttons = [
    ['Hint', '/hgam2'],
    ['Nyerah', 'menyerah']
]