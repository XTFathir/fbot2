let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','🤖','⭐','🤣'])}`,
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