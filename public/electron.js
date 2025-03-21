const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL("http://localhost:5173"); // Vite default port

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
// Log directory
const LOGS_DIR = path.join(app.getPath("userData"), "logs");

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR);
}

// Handle logging
ipcMain.on("write-log", (event, { level, message, data }) => {
  const logFile = path.join(
    LOGS_DIR,
    `${new Date().toISOString().split("T")[0]}.log`
  );
  const logMessage = `[${new Date().toISOString()}] [${level}] ${message} ${
    data ? JSON.stringify(data) : ""
  }\n`;

  fs.appendFileSync(logFile, logMessage);
});

// Clean up old logs (20+ days)
ipcMain.on("cleanup-logs", () => {
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - 20);

  fs.readdirSync(LOGS_DIR).forEach((file) => {
    const filePath = path.join(LOGS_DIR, file);
    const fileDate = file.split(".")[0];

    if (new Date(fileDate) < thresholdDate) {
      fs.unlinkSync(filePath);
      console.log(`Deleted old log file: ${file}`);
    }
  });
});
