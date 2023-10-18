const { default: 
makeWASocket, 
downloadContentFromMessage, 
emitGroupParticipantsUpdate,  
emitGroupUpdate, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore, 
MiscMessageGenerationOptions, 
useMultiFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag,
WANode,WAMetric, 
ChatModification, 
MessageTypeProto,
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto, 
WAGroupMetadata, 
ProxyAgent, 
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
generateWAMessageContent, 
URL_REGEX, 
Contact, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage, 
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
generateWAMessageFromContent, 
fetchLatestBaileysVersion, 
processMessage, 
processingMutex } = require('@adiwajshing/baileys');
 

 const pino = require('pino') 
 const fs = require('fs') 
 const axios = require('axios'); 
 
 
 
 async  function ligarbot() {
 const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) }) 
 

//QRCODE 
 const { state, saveCreds } = await useMultiFileAuthState('./sessao') 
 const { version, isLatest } = await fetchLatestBaileysVersion() 
 const client = makeWASocket({ 
 version, 
 logger: pino({ level: 'silent'}), 
 printQRInTerminal: true, 
 qrTimeout: 180000, 
 browser: ['Noaki-Base', 'Chrome', '1.0.0'], 
 auth: state 
  }) 
 store.bind(client.ev) 
  
  
 client.ev.on('chats.set', () => { console.log('setando conversas...') }) 
 
 client.ev.on('contacts.set', () => { console.log('setando contatos...') }) 
 
 client.ev.on('creds.update', saveCreds) 
 
 client.ev.on('messages.upsert', async ({ messages }) => { try { const info = messages[0] 
 if (!info.message) return 
 
 const key = { remoteJid: info.key.remoteJid, id: info.key.id, participant: info.key.participant 
 } 
 
 await client.readMessages([key]) 
 if (info.key && info.key.remoteJid == 'status@broadcast') return 
 const altpdf = Object.keys(info.message) 
 const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0] 
  
  
 const from = info.key.remoteJid
  
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : '' 

  
 
  
   prefix = '!' 
   const isCmd = body.startsWith(prefix) 
   const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
   
   
  var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : '' 
  
  
 const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase() 
  
  
async function escrever (texto) { 
await client.sendPresenceUpdate('composing', from) 
await esperar(1000) 
client.sendMessage(from, { text: texto }, {quoted: info}) 
} 

  
  
  const enviar = (texto) => { client.sendMessage(from, { text: texto }, {quoted: info}) } 
  
  const esperar = async (tempo) => { return new Promise(funcao => setTimeout(funcao, tempo)); } 
  
  
  
  
  //Comandos com prefix
  switch(comando) { 
  
  case  'escreva': 
  escrever(`oooi`) 
  break 
  
  case 'responda': 
  enviar(`oooi`) 
  break 
  } 
  
  


 //comandos sem prefix
  } catch (erro) 
  { console.log(erro)
  }}) 
    
  
  client.ev.on('connection.update', (update) => { const { connection, lastDisconnect } = update 
  if(lastDisconnect === undefined) { 
  } 
  
  if(connection === 'close') { 
  var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut 
  ligarbot() } 
  
  if(update.isNewLogin) { console.log(`conectado com sucesso`) }})} ligarbot() 
  
  fs.watchFile('./index.js', (curr, prev) => { 
  
  if (curr.mtime.getTime() !== prev.mtime.getTime()) { console.log('A index foi editada, irei reiniciar...'); process.exit() } }) 
  
  
  
  
  
  
 
//Rony: https://youtube.com/@Spectrum_bots 

//Zalts: https://youtube.com/@zalts 

//pxz: https://www.youtube.com/@pxzmodsconteudos

//REST API   https://silverstars.shop/ *
