const fs = require('fs')
const chalk = require('chalk')

// ---『 SETTINGS BOT 』--- \\
autoread = true
autotyping = false
public = false

// ---『 SETTINGS GROUP 』--- \\
antilink = false
antilinkv2 = false
antiwame = false

// ---『 SETTINGS OWNER 』--- \\
global.owner = '6289513081052'
global.namabot = 'Arxzy-MD'
global.namaowner = 'Arxzy'
global.mess = {
    done: 'Done ✅',
    seller: 'Feature Only for _*Seller Panel*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}
// ---『 SETTING WM 』--- \\
global.packname = ''
global.author = namaowner
global.prefa = ['', '.']

// ---『 SETTINGS IMAGE 』--- \\
global.thumb = fs.readFileSync('./media/Arxzy.jpg')
global.qris = fs.readFileSync('./media/qris.jpg')


// ---『 JANGAN DI OTAK-ATIK 』--- \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})