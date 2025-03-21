/* eslint-disable @typescript-eslint/no-explicit-any */
// const { ipcRenderer } = window.require("electron");

class Logger {
  static log(level: string, message: string, data?: any) {
    // ipcRenderer.send("write-log", { level, message, data });
    console.log(`[${level}] ${message}`, data);
  }

  static info(message: string, data?: any) {
    this.log("INFO", message, data);
  }

  static warn(message: string, data?: any) {
    this.log("WARN", message, data);
  }

  static error(message: string, data?: any) {
    this.log("ERROR", message, data);
  }

  static cleanupLogs() {
    // ipcRenderer.send("cleanup-logs");
  }
}

export default Logger;
