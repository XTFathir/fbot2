import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hlag2/i.test(m.quoted.text) || /.*hlag2/i.test(m.text))
        return !0
    this.tebaklagu2 = this.tebaklagu2 ? this.tebaklagu2 : {}
    if (!(id in this.tebaklagu2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebaklagu2, m)
    if (m.quoted.id == this.tebaklagu2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklagu2[id][3])
            delete this.tebaklagu2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaklagu2, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebaklagu2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklagu2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebaklagu2[id][2]} XP`, author, null, buttontebaklagu2, m)
            clearTimeout(this.tebaklagu2[id][3])
            delete this.tebaklagu2[id]
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hlag2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebaklagu2 = [
    ['tebaklagu2', '/tebaklagu2']
]