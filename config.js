const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Yamar" 


global.devs = "237672114754" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "23772114754";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237672114754";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_32_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVsR0xIU3RCS0NOOXVoMkl6U2pYdFdETFpZVkFZU01oZ0VhZTltK3JBbk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRyVDZ1NFpPVE0ya3pOR2dyOGhlX3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTAzNjY3ODItMzMyOS00Yzc5LWE0MzktNWE0NjMwNWZkNzg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTMsXG4gICAgICA1NCxcbiAgICAgIDExMSxcbiAgICAgIDI1NCxcbiAgICAgIDExNSxcbiAgICAgIDM3LFxuICAgICAgMTE4LFxuICAgICAgNDMsXG4gICAgICAxMDUsXG4gICAgICA5MCxcbiAgICAgIDE0OSxcbiAgICAgIDgsXG4gICAgICAyMjcsXG4gICAgICAxNzAsXG4gICAgICAzMyxcbiAgICAgIDEzMSxcbiAgICAgIDE2LFxuICAgICAgOTAsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgOTAsXG4gICAgICAyMjcsXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgNjYsXG4gICAgICA4MCxcbiAgICAgIDk0LFxuICAgICAgMTY2LFxuICAgICAgODcsXG4gICAgICA1MSxcbiAgICAgIDI3LFxuICAgICAgMTM4LFxuICAgICAgMTI0LFxuICAgICAgNCxcbiAgICAgIDE1OCxcbiAgICAgIDIyMyxcbiAgICAgIDEwLFxuICAgICAgMjQyLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcmVrVHdRdzdQUXRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFBeTEzdFB2NDJ1ZXREazdHVk9qc2Z4K1dlblU3MEo4NU5iQ1ZMakNjbHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMTVFWG9LNnNnUmpUcUVBWEN1Zm9ZdXVPcFNJUjdVWGg5bFQ4RTd3Q0RMczNIaWZJa3ZwdTloOXhPVkx1SmcyeFpwQjJiWStCaXZYSTUvbENodWJjREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmZrV0NIR0ZoSzFzTVRpdWlXY2ZrU2hmN2Z3dmpaeWVZa1dmT2JnT0FBYmtIYkIxQmNkU2dKSmNQc0hyL1NtbHY5dEZRWjZOOUxlVC8wa1F1Y3FKQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NzIxMTQ3NTQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc0NDcwOTU4MDU5NjYxOjE2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjcyMTE0NzU0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTgxOTY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWUzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNYWM0RkRMam1HRUFLOW9NYjBQS0VSYlY0bnhsOUVmQXhWTlZ0VFpLd0I4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjExOTY4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxNTAwODg0OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlMy5qc29uIjogIntcImtleURhdGFcIjpcIkVwS0ZCaUlwaXIrOTZJQzltT0NMSnlBaU1XdmEwM2JwbW9hWVlFcU12anM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MTE5Njg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MTUzNDk2NThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHd3dJRFR2VVNIdU5CQU1hMTkrMVJPWVpnZXJkOE1BYjVPRlk5aFRCSWE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjExOTY4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxODM1MTAzNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlNS5qc29uIjogIntcImtleURhdGFcIjpcImVWZTYyYjF4VUFmbGdSVEZPbWQyVGxDL1JTeHZqVldhUERhdU1DYXhoYlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MTE5Njg5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiMnhRbVprdGRNSW1Sb3dtTC9lc2wyN1N1NlJjUEV4WFV3ZkxJVDBWQ1hrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjExOTY5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTQzODYyMjU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
