let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'Gd Orang' : 'Oranf'}]\n\n`
m.reply(`*Grup gwejh:*
${txt}
`.trim())
}
handler.command = handler.help = ['grouplist', 'listgrup']
handler.tags = ['info']

export default handler