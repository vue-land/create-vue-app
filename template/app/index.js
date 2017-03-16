const os = require('os')
const path = require('path')
const url = require('url')
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const isDev = require('electron-is-dev')
require('electron-context-menu')()

const appMenu = require('./menu')
const config = require('./config')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let isQuitting = false

const isAlreadyRunning = app.makeSingleInstance(() => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }

    mainWindow.show()
  }
})

if (isAlreadyRunning) {
  app.quit()
}

function createWindow (port) {
  // Create the browser window.
  const lastWindowState = config.get('lastWindowState')
  const win = new BrowserWindow({
    x: lastWindowState.x,
    y: lastWindowState.y,
    width: lastWindowState.width,
    height: lastWindowState.height,
    show: false
  })

  // and load the index.html of the app.
  const index = isDev ? `http://localhost:4000` : `file://${path.join(__dirname, 'dist/index.html')}`
  win.loadURL(index)

  if (isDev) {
    // Open the DevTools.
    const installExtension = require('electron-devtools-installer')
    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err))
  }

   win.on('close', e => {
    if (!isQuitting) {
      e.preventDefault()

      if (process.platform === 'darwin') {
        app.hide()
      } else {
        win.hide()
      }
    }
  })

  return win
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  electron.Menu.setApplicationMenu(appMenu)
  mainWindow = createWindow()
  mainWindow.show()
})

app.on('before-quit', () => {
  isQuitting = true

  if (!mainWindow.isFullScreen()) {
    config.set('lastWindowState', mainWindow.getBounds())
  }
})

app.on('activate', () => {
  mainWindow.show()
})
