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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237672114754";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_53_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWXJhcFJqK203WVRPamYwOCtSVkM3d3hrQm8yVE91QnM5TDZUdUVpb1VtQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGdyVExvdjZSaHFiSFA2V3ZtVWtCUVwiLFxuICBcInBob25lSWRcIjogXCJjNzJlMWNhMS05MjMzLTQxODUtOGQ0MC03ZWViZGMzN2JhNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjUwLFxuICAgICAgOTQsXG4gICAgICAxNTksXG4gICAgICAxNDksXG4gICAgICAyMjQsXG4gICAgICA1NixcbiAgICAgIDEwNyxcbiAgICAgIDEzNSxcbiAgICAgIDQzLFxuICAgICAgMTU3LFxuICAgICAgMjEzLFxuICAgICAgMTU2LFxuICAgICAgMTc4LFxuICAgICAgMTAzLFxuICAgICAgMTczLFxuICAgICAgMTAsXG4gICAgICAxMTgsXG4gICAgICA1MSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAyNDIsXG4gICAgICAxNzEsXG4gICAgICA5NCxcbiAgICAgIDIwNCxcbiAgICAgIDcsXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAxMTAsXG4gICAgICAxNDksXG4gICAgICAyMTgsXG4gICAgICA3NCxcbiAgICAgIDEzOCxcbiAgICAgIDgwLFxuICAgICAgOTIsXG4gICAgICAxMjIsXG4gICAgICA3OCxcbiAgICAgIDIyMSxcbiAgICAgIDEzOSxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyZWtUd1F4OURXdEFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUF5MTN0UHY0MnVldERrN0dWT2pzZngrV2VuVTcwSjg1TmJDVkxqQ2Nscz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzeU8rVmpSSlE3TFlvQ3RhRUp4czJuc0d6Q0xnU2ZObWg4TDAvNExwbUliRGN0blhRRHNYSmhnTEZvUVhGVlRTVUprQzBCS1M5am5KK1YvdW9nUm9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKTDlrNGJNcFZhZmxJQ2JRQUZ1OGhpb3k4ck1HNWx6QVdUQlE1OGJDZlVUVUM4MktqVndVOTMwbm9RK09HdFFKclFPdU40dkl2SWF1V2o3WXRQTHJpUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3MjExNDc1NDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzQ0NzA5NTgwNTk2NjE6MTdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzIxMTQ3NTQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwODM5NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZTNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlMi5qc29uIjogIntcImtleURhdGFcIjpcIk1hYzRGRExqbUdFQUs5b01iMFBLRVJiVjRueGw5RWZBeFZOVnRUWkt3Qjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MTE5Njg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTE1MDA4ODQ4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWUzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXBLRkJpSXBpcis5NklDOW1PQ0xKeUFpTVd2YTAzYnBtb2FZWUVxTXZqcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjYxMTk2ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxNTM0OTY1OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlNC5qc29uIjogIntcImtleURhdGFcIjpcIkd3d0lEVHZVU0h1TkJBTWExOSsxUk9ZWmdlcmQ4TUFiNU9GWTloVEJJYTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MTE5Njg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNTE4MzUxMDM2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWU1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVZlNjJiMXhVQWZsZ1JURk9tZDJUbEMvUlN4dmpWV2FQRGF1TUNheGhiWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjYxMTk2ODksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlNi5qc29uIjogIntcImtleURhdGFcIjpcImIyeFFtWmt0ZE1JbVJvd21ML2VzbDI3U3U2UmNQRXhYVXdmTElUMFZDWGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MTE5NjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NDM4NjIyNTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxdmxHWlNyWGp6eWNualJPV1RaVHhFaVpjWlZJQS9IdkVvOGdsdTNncUlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjExOTY5MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMDgzMzU0MjgyXCJ9Igp9"  // PUT your SESSION_ID 


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
