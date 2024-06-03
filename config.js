const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =""
global.location="Colombo.Sri Lanka"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94767422877" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94767422877";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "+94767422877";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+94767422877";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_57_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0l2Z3QrWFl6UEpRWUY3ODIvS2FoRTlLM3l6U0JrM1Q5eXVVb003V05FYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NzQyMjg3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEM1OTA0RDgxOUE3RDYxQ0E4MjAwMjA1MTJCN0FEMzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDA1MDQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVUMk9WWlk2VDBXbGVYVkpWbWhJc1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWY0Yzc2YjEtZTAyZi00ZWZlLTkyMWItZWU0NTA4ZGMzODJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDYxLFxuICAgICAgNTYsXG4gICAgICAyMTYsXG4gICAgICAxMTksXG4gICAgICA1OSxcbiAgICAgIDE4NyxcbiAgICAgIDU2LFxuICAgICAgMjYsXG4gICAgICAxNDEsXG4gICAgICAxNzQsXG4gICAgICAxMzQsXG4gICAgICAxNTUsXG4gICAgICA1NCxcbiAgICAgIDE4OCxcbiAgICAgIDc2LFxuICAgICAgMjE4LFxuICAgICAgMjMyLFxuICAgICAgMjEsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICA5NixcbiAgICAgIDIwNyxcbiAgICAgIDE4NixcbiAgICAgIDE1MCxcbiAgICAgIDQ3LFxuICAgICAgNDEsXG4gICAgICAxMzMsXG4gICAgICAxMjYsXG4gICAgICAxODAsXG4gICAgICA2NyxcbiAgICAgIDIzNCxcbiAgICAgIDE1LFxuICAgICAgMTcxLFxuICAgICAgODYsXG4gICAgICA2NCxcbiAgICAgIDU4LFxuICAgICAgMjUzLFxuICAgICAgMTEzLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktQS0MzSks5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NzQyMjg3NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XpyDwnZecIPCdl55cXG5cXG5cXG5cXG5cXG5cXG7wnZenIPCdl6Ig8J2XnlxcblxcblxcblxcblxcblxcbvCdl6XwnZec8J2XrPCdl5TwnZefXFxuXFxuXFxuXFxuXFxuXFxu8J2XoCDwnZeUIPCdl5sg8J2XnFxcblxcblxcblxcblxcblxcbvCdl5Ug8J2XlCDwnZeVIPCdl5QgXFxcIiDwnZebXFxuXFxuXFxuXFxuXFxuXFxu8J2XpvCdl6XwnZecIPCdl5/wnZeU8J2XofCdl57wnZeUXCIsXG4gICAgXCJsaWRcIjogXCI2OTg3MDkzMDY1MzM2ODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0phSXZyVURFTytLOXJJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL294cS9Rd2F1cm1UcmM4MGgvN01sV2dIUzNFU2s2OEt2WWxhLzRWSVJVVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIweC9ieEE3ZktZbkZLWk5YeHhlb1V1MWxYdG5UN3gxMjhpb3k3VWs3TzFLTTh1Y0Ftb1ErVnoxOExmeEtCZ3duY3RSVzhVL1kvMmprVk1HcmQ2OVJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJraFNQR0FSVmczWG4zQlFEQ25ORW1Ub3RmNHRrb1dNYmFkYWEwZFdJdXhGcDBiMmVka1BQYU9seWdaUkxycUVVbjZ6R1hlZlM4ZXFxc0NKSGt6OEJnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NzQyMjg3NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NDA1MDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlF5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTTDlsaDh6R05VY0l2T2g5MWZNQmFyZFlGbmJEK3BrVG5oeWlSS1BxdFRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNzQ3MjI3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NDAzNzc5ODkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ishi Bot",
  ownername:process.env.OWNER_NAME|| "Ishi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
