case 'login':
if (isRegistro) return reply(`Você já está registrado 😡`)
registros.push(sender)
fs.writeFileSync('./Naoki/funções/usuarios/registros.json',JSON.stringify(registros))
reply(`Estou lhe registrando, aguarde. . .`)
await delay(800)
try {
byJkga = await naoki.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
byJkga = logo
}
caracaa = await getBuffer(byJkga)
await delay(4000)
try {
naoki.sendMessage(from, {
image: caracaa,
caption: `BOTA AS INFO AQUI PRA FICAR BONITO CASO NÃO QUEIRA QUE PUXE A FOTO DO USUÁRIO É SÓ TIRA DAQUELE PRIMEIRO "try" LÁ DE CIMA E ATÉ O FINAL AÍ TMJ É NOIS 😀✌️
`
}, {quoted: selo})
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break