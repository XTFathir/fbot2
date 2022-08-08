let handler = async (m, { conn, text }) => {
m.reply(' Fitur eror ')
}

handler.help = ['caripesan <pesan>|<jumlah>']
handler.tags = ['tools']

handler.command = /^caripesan/i

export default handler