const { app, BrowserWindow,Menu } = require('electron')
const path = require('path')
Menu.setApplicationMenu(Menu.buildFromTemplate([
]));
function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
	icon:path.join(__dirname, 'icon.png'),
	title:"Gvbvdxx's Chat",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
	  nodeIntegration: true
    }
  })

  win.loadFile('./chat/index.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
