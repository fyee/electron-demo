/**
 * Created by Simon on 4/9/16.
 */
'use strict';

const electron = require('electron');
//Module to control application life.
const app = electron.app;
//Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

//keep a global reference of the window object, if you don't, the window will be
//closed automatically when the Javascript object is garbage collected.
let mainWindow;

function createWindow() {
    //create the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600});
    //and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

//this method will be called when Electron has finished initialization and is ready
//to create browser windows.
app.on('ready', createWindow);

//Quit when all windows are closed.
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if(mainWindow === null){
        createWindow();
    }
})
