const { ipcRenderer } = require('electron')

window.ipcRenderer = ipcRenderer


setInterval(() => {
  console.log('PRELAOD')
})
