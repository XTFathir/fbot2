import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgab2/i.test(m.quoted.text) || /.*hgab2/i.test(m.text))
        return !0
    this.tebakgabut2 = this.tebakgabut2 ? this.tebakgabut2 : {}
    if (!(id in this.tebakgabut2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakgabut2, m)
    if (m.quoted.id == this.tebakgabut2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgabut2[id][3])
            delete this.tebakgabut2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakgabut2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgabut2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgabut2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakgabut2[id][2]} XP`, author, null, buttontebakgabut2, m)
            clearTimeout(this.tebakgabut2[id][3])
            delete this.tebakgabut2[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hgab2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakgabut2 = [
    ['tebakgabut2', '/tebakgabut2']
]