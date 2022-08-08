import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hben2/i.test(m.quoted.text) || /.*hben2/i.test(m.text))
        return !0
    this.tebakbendera2 = this.tebakbendera2 ? this.tebakbendera2 : {}
    if (!(id in this.tebakbendera2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakbendera2, m)
    if (m.quoted.id == this.tebakbendera2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakbendera2[id][3])
            delete this.tebakbendera2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakbendera2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakbendera2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.nama.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakbendera2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakbendera2[id][2]} XP`, author, null, buttontebakbendera2, m)
            clearTimeout(this.tebakbendera2[id][3])
            delete this.tebakbendera2[id]
        } else if (similarity(m.text.toLowerCase(), json.nama.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hben2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakbendera2 = [
    ['tebakbendera2', '/tebakbendera2']
]