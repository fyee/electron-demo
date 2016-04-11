/**
 * Created by Simon on 4/10/16.
 */
const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

let insertWindow;
exports.createAboutWindow = function () {
    insertWindow = new BrowserWindow({
        width: 285,
        height: 175,
        // show: false
    });

    insertWindow.loadURL('file://' + __dirname + '/../../view/about/index.html');

    insertWindow.on('closed', function () {
        insertWindow = null;
    });
    return insertWindow;
}
