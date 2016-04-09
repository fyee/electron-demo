const electron = require('electron');
//const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;

var appIcon = null;
exports.createTray= function(){
    appIcon = new Tray(__dirname+ '/../img/icon.png');
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
}

/*
app.on('ready', function(){

});*/
