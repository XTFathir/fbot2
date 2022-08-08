import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkal2/i.test(m.quoted.text) || /.*hkal2/i.test(m.text))
        return !0
    this.tebakkalimat2 = this.tebakkalimat2 ? this.tebakkalimat2 : {}
    if (!(id in this.tebakkalimat2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakkalimat2, m)
    if (m.quoted.id == this.tebakkalimat2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkalimat2[id][3])
            delete this.tebakkalimat2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkalimat2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkalimat2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkalimat2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakkalimat2[id][2]} XP`, author, null, buttontebakkalimat2, m)
            clearTimeout(this.tebakkalimat2[id][3])
            delete this.tebakkalimat2[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hkal2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakkalimat2 = [
    ['tebakkalimat2', '/tebakkalimat2']
]