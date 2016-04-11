'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let insertWindow = null;
const ipcMain = require('electron').ipcMain;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

function createAboutWindow() {
    insertWindow = new BrowserWindow({
        width: 285,
        height: 175,
        resizable: false,
        minimizable:false
    });

    insertWindow.loadURL('file://' + __dirname + '/view/about/index.html');
    insertWindow.on('closed', function () {
        insertWindow = null;
    });
    return insertWindow;
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('closedClient', function (event, arg) {
    app.quit();
});

ipcMain.on('activateClient', function(event, arg){
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('createAboutWindow', function () {
    if (insertWindow === null) {
        createAboutWindow();
    }
});

