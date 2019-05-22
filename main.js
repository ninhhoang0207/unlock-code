const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const AppTitle = 'Unlock Code';
const Icon = path.join(__dirname, 'icon.png');

let win;

function createWindow() {
    // win = new BrowserWindow();
    win = new BrowserWindow({
        title: AppTitle,
        show: false,
        width: 800,
        height: 600,
        icon: Icon
        // fullscreen: true
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.on('close', () => {
        win = null;
    });

    win.webContents.once('dom-ready', () => {
        win.show();
    });

    /////////////////// DEV MODE //////////////////////
    win.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})

