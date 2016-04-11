/**
 * Created by Simon on 4/11/16.
 */
const remote = require('remote');
const Menu = remote.require('menu');
const Tray = remote.Tray;
const ipcRenderer = require('electron').ipcRenderer;
const BrowserWindow = remote.BrowserWindow;

let tray = new Tray(__dirname + '/../img/icon.png');

exports.createTray = function () {

    var contextMenu = Menu.buildFromTemplate([
        {
            label: '显示',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
                remote.getCurrentWindow().show();
                //这里判断如果当前窗口关闭的话,需要重新打开,但是最好可以在关闭的时候让窗口隐藏
                /* if(focusedWindow){
                 focusedWindow.show();
                 }else{
                 ipcRenderer.send("activateClient", true);
                 }*/
            }
        },
        {
            label: '关于',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
                ipcRenderer.send('createAboutWindow', true);
            }
        },
        {
            label: '退出',
            accelerator: 'Command+Q',
            click: function (item, focusedWindow) {
                ipcRenderer.send("closedClient", true);
            }
        }
    ]);

    tray.setToolTip('e3c desktop client.');
    tray.setContextMenu(contextMenu);
    return tray;
}

tray.on('click', function () {
    ipcRenderer.send("closedClient", true);
});



