const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")

autoUpdater.on('update-available', (v) => {
  console.log('Yeeehaaa', v)
})

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      preload: 'src/preload.js',
      webviewTag: true,
    }
  })

  win.loadURL(`file://${__dirname}/index.html`)

  setInterval(() => {
    autoUpdater.checkForUpdatesAndNotify()
  }, 10000)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
