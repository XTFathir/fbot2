import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkab2/i.test(m.quoted.text) || /.*hkab2/i.test(m.text))
        return !0
    this.tebakkabupaten2 = this.tebakkabupaten2 ? this.tebakkabupaten2 : {}
    if (!(id in this.tebakkabupaten2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakkabupaten2, m)
    if (m.quoted.id == this.tebakkabupaten2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkabupaten2[id][3])
            delete this.tebakkabupaten2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkabupaten2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkabupaten2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkabupaten2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakkabupaten2[id][2]} XP`, author, null, buttontebakkabupaten2, m)
            clearTimeout(this.tebakkabupaten2[id][3])
            delete this.tebakkabupaten2[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hkab2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakkabupaten2 = [
    ['tebakkabupaten2', '/tebakkabupaten2']
]