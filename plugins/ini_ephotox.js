let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} bee helo
  *List Efek:*
3d-crack-text-effect-online
3d-underwater
3d-wood
3damerican-flag
3dglue-realistic
3dgradient2
3dgradient
3dmetal-effect
3dmetal-text-
3dmulticolor-papercut
3dpig-gif
3druby-stone
3dsand-engraved
3dshiny-metallic
3dsparkle-christmas
3dsub-zombie
3dtext-effect2
3dtext-effect3
3dtext-effect
3dtext-pig
3dvalentine-cards
3dxmas-cards2
3dxmas-cards
83day-card2
83day-card3
83day-card4
83day-card
advanced-glow
ahri-league-of-legends
alice-league-of-kings
amily-arena-of-valor
angels-wings
anonymous-neon
art-shader
azzenka-league-of-kings
balloon-noel
bats-halloween
bear2
bee
birthday-cake2
birthday-cake3
birthday-cake4
birthday-cake5
birthday-cake6
birthday-cake7
birthday-cake8
birthday-cake9
birthday-cake10
birthday-cake
birthday-cards
birthdayfoil-balloon
blackpink-neon
blackpink
blackskin-snake
blood-frosted
blood-steel
blood-text2
blood-text
blood-wall
blue-effect
blue-neon
bokeh-text
boom-comic
broken-glass
bulb-effect
cake-text2
cake-text3
cake-text
candy-text
card-christmas2
card-christmas
cartoon-graffiti
christmas-snow
christmas-tree
christmasball-ornaments
circle-mascot-team
cloth-effect
cloud-sky
clouds-sky
color-fireworks
colorful-angelwing
cool-metal
cute-girl-gamer
cute-typography
dance-effect
dancing-santaclaus
darkgreen-typography
darth-vader
decorated-cookie
deluxe-gold
deluxe-silver
dinamo-effect
double-exposure
dragon-fire
equalizer-blue
equalizer-effect
eraser-effect
evelynn-league-of-legends
fabric-effect2
fabric-effect
facebook-gold-play-button
facebook-silver-play-button
firework-effect2
firework-effect
flower-card
flower-effect
football-club2
fps-game
fun-certify2
fun-certify
galaxy-angel
galaxy-angelwings
galaxy-effect2
galaxy-effect
galaxy-text2
galaxy-text3
galaxy-text4
galaxy-text5
galaxy-text
galaxyangel-wings
gankk-league-of-kings
gemstone-effect
glitter-gold
glossy-carbon
glowing-effect
gold-effect2
gold-effect3
gold-effect
gold-text2
gold-text
golden-text
graffiti-text2
graffiti-text3
graffiti-text4
graffiti-text5
graffiti-text
green-brush
green-fireworks
greenskin-snake
greeting-cards
greetingcard-birthday2
greetingcard-birthday
halloween-fire
halloween-frankenstain
halloween-text2
halloween-text
halloween-videocard
hand-love2
hand-love
handwritten-foggyglass
happynewyear-firework
heart-cup
heart-flashlight
heart-wings
holographic-effect
horror-gift
icecream-chocolate
jean-text-effect
jewel-effect
joker
kahlii-arena-of-valor
kaisa-league-of-legends
leaves-text
lend-effect
light-effect
light-neonsign
lightfuturistic-technology
lightning-pubg-video
lol-fiora
lol-master-yi
lol-notice
lol-zed
luxury-gold
magic-effect
matrix
metal-darkgold
metal-eagle
metal-effect
metal-headshot
metal-lion
metal-logo
metal-star
metal-text
metallic-text
mganga-league-of-kings
minimal-logomaker
mobile-legends
modern-gold3
modern-gold4
modern-gold5
modern-goldgreen
modern-goldpurple
modern-goldred2
modern-goldred
modern-goldsliver
my-love
name-football
neon-brightblue
neon-devilwing
neon-satin
neon-valentine
neonlight-galaxy
newyear-greeting2
newyear-greeting3
newyear-greeting
ninja-mascot
orangeskin-snake
paper-cutout
paperclip-quote
papercut-effect
personalized-christmas
personalized-queen
pikachu
project-yasuo
pubg-birthdaycake
pubg-maker2
pubg-maker3
pubg-maker4
pubg-maker
purple-effect
rainbow-glow
realistic-cloud
realistic-embroidery
redhot-metal2
redhot-metal
resht-league-of-kings
road-paint
romantic-valentine
rooster
round-thunder
sandsummer-beach2
sandsummer-beach
signature
skin-python-text-effect
skull-videomaker
snake-text
snow-text
stars-night
status-life2
status-life3
status-life
status-love2
status-love
status-mood2
status-mood3
status-mood4
status-mood
storm-trooper
summerysand
sunflower-birthdaycake
sunlight-shadow
tattoo-body2
tattoo-body
tattoo-girl
tattoo-hand2
text-christmas
text-effectcolor
text-leaves
text-party
text-rain
text-wall
tiger
traveling-bear
typography-leaves
typography-leavesautumn
typography-maker2
typography-maker3
typography-maker
underwater-text
valentine-day
video-greeting-cards
violet-league-of-kings
wallpaper-moblie
water-3d
water-effect2
water-effect
watercolor-effect
wedding-silver
wet-glass
wings-effect
women-day
yasuo
yellowskin-snake
yena-arena-of-valor`)

let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://violetics.pw/api/ephoto360/${thm}?apikey=beta&text=${text1}`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Ephoto360 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: m,jpegThumbnail: Buffer.alloc(0)}}}})
}

handler.command = /^(ephotox|ephotoh)$/i

export default handler