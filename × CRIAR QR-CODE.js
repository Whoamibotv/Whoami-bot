case 'qrcode': //VNCS XANAA ROBOT
const tex = encodeURIComponent(body.slice(8))
if (!tex) return reply('Digite um texto/url que deseja criar um código qr')
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
conn.sendMessage(from, {image: bufferr}, {quoted: info})
break