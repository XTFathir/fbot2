let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['๐จ','๐','๐','๐ณ','๐', '๐ฅต', '๐ฑ', '๐ฆ', '๐', '๐ค','๐ฟ','๐ฆ','๐คจ','๐ฅด','๐','๐','๐', '๐','๐ค','โญ','๐คฃ'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bilek|laik|banh|nihh|tytyd|anjir|dek|ygy|awokawok)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }