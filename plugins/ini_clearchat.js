let handler = async (m, { conn, command, args }) => {
m.reply(' Fitur eror ')
}
handler.help = [
  'clearchat'
]
handler.tags = ['owner']
handler.command = /^(clear|delete|mute)chat$/i
handler.owner = true

export default handler