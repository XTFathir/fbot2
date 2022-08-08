let handler = async (m, { conn}) => {
let test =`test berhasil!!`
m.reply('wkwk')

}

handler.help = ['test']
handler.tags = ['tester']
handler.command = /^(test)?)$/i

export default handler