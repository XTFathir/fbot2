let handler = async (m, { conn }) => {
/*	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: m, orderTitle: m, sellerJid: '0@s.whatsapp.net' } } }*/
  conn.fakeReply(m.chat, `Hai Kak ${conn.getName(m.sender)}, Apa kabar? 🤗`, '0@s.whatsapp.net', 'Status BOT aktif')
 }

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^bot$/i

export default handler
