const {app, BrowserWindow} = require('electron')
function createWindow () {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.removeMenu()
    win.loadFile('mainpage.html')
}

app.on('ready', createWindow)