let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid 
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Foto tidak ditemukan`
        conn.updateProfilePicture(bot, img)
        conn.fakeReply(m.chat, `SUKSES MENGANTI FOTO PROFILE`, '0@s.whatsapp.net', 'PHOTO PROFILE UPDATE')
    }
}
handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^setppbot$/i

handler.rowner = true
export default handler
