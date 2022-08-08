import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hcak2/i.test(m.quoted.text) || /.*hcak2/i.test(m.text))
        return !0
    this.caklontong2 = this.caklontong2 ? this.caklontong2 : {}
    if (!(id in this.caklontong2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttoncaklontong2, m)
    if (m.quoted.id == this.caklontong2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.caklontong2[id][3])
            delete this.caklontong2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttoncaklontong2, m)
        }
        let json = JSON.parse(JSON.stringify(this.caklontong2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.answer.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.caklontong2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.caklontong2[id][2]} XP`, author, null, buttoncaklontong2, m)
            clearTimeout(this.caklontong2[id][3])
            delete this.caklontong2[id]
        } else if (similarity(m.text.toLowerCase(), json.answer.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hcak2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttoncaklontong2 = [
    ['caklontong2', '/caklontong2']
]