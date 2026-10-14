// Desktop wrapper: opens the offline vocab app in its own window.
const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 760,
    height: 940,
    minWidth: 380,
    minHeight: 560,
    title: "Gremlin Vocab Trainer",
    icon: path.join(__dirname, "..", "build", "icon.png"),
    backgroundColor: "#F3F5FA",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
  // Open any outside links in the normal browser instead of inside the app.
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}

Menu.setApplicationMenu(null);
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
