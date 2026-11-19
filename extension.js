const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Custom UI Style leaves backup files next to the files it patches.
// A VS Code update replaces the app bundle, so if the backup is missing, the patch is gone.
exports.activate = async () => {
  const marker = path.join(vscode.env.appRoot, 'out', 'vs', 'workbench', 'workbench.desktop.main.custom-ui-style.js');
  if (!fs.existsSync(marker)) {
    await vscode.commands.executeCommand('custom-ui-style.reload');
  }
};
exports.deactivate = () => {};
