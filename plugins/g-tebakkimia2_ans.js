import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkim2/i.test(m.quoted.text) || /.*hkim2/i.test(m.text))
        return !0
    this.tebakkimia2 = this.tebakkimia2 ? this.tebakkimia2 : {}
    if (!(id in this.tebakkimia2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakkimia2, m)
    if (m.quoted.id == this.tebakkimia2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkimia2[id][3])
            delete this.tebakkimia2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkimia2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkimia2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkimia2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakkimia2[id][2]} XP`, author, null, buttontebakkimia2, m)
            clearTimeout(this.tebakkimia2[id][3])
            delete this.tebakkimia2[id]
        } else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hkim2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakkimia2 = [
    ['tebakkimia2', '/tebakkimia2']
]