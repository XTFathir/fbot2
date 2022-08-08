import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsus2/i.test(m.quoted.text) || /.*hsus2/i.test(m.text))
        return !0
    this.susunkata2 = this.susunkata2 ? this.susunkata2 : {}
    if (!(id in this.susunkata2))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttonsusunkata2, m)
    if (m.quoted.id == this.susunkata2[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.susunkata2[id][3])
            delete this.susunkata2[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttonsusunkata2, m)
        }
        let json = JSON.parse(JSON.stringify(this.susunkata2[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata2[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.susunkata2[id][2]} XP`, author, null, buttonsusunkata2, m)
            clearTimeout(this.susunkata2[id][3])
            delete this.susunkata2[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hsus2'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttonsusunkata2 = [
    ['susunkata2', '/susunkata2']
]