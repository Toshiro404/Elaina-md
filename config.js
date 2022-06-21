/*
   * Create By Dika Ardnt.
   * Recode By SkylarKaf
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['919609900020','918373017400']
global.premium = ['919609900020']
global.botnma = 'Elaina - MD'
global.ownernma = 'Toshiro-sama'
global.packname = 'elaina' 
global.author = 'by Toshiro-sama'
global.sessionName = 'Web'
global.prefa = ['+']
global.sp = '>'
global.mess = {
    success: 'Success',
    admin: 'This feature can only be accessed by group admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Owner Bot's Special Features',
    group: 'This Features Can Only Be Used In Groups!',
    private: 'This Features Can Only Be Used Private Chat!',
    bot: 'Bot Special Features',
    wait: 'Processing Data....',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every Hour',
}
global.limitawal = {
    premium: "Infinity",
    free: 100000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

global.gifmp4 = "https://uploader.caliph.my.id/file/G3jADVko4M.mp4",
global.menuimg = "https://uploader.caliph.my.id/file/zQ5899monI.png"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
