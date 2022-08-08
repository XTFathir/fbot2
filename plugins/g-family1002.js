import fetch from 'node-fetch'
const winScore = 4999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family1002_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
    const js = await fetch('https://kuontol-api.herokuapp.com/api/game/family100')
    let json = await js.json()
    let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
+${winScore} XP tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, author, null, [['Nyerah', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family1002']
handler.tags = ['game']
handler.command = /^family1002$/i

export default handler