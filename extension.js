const child_process = require('child_process');
const vscode = require('vscode');

function activate(context) {
	const disposable = vscode.commands.registerCommand('extension.rustfmt', (editor) => {
    const fileName = vscode.window.activeTextEditor.document.fileName
    child_process.spawnSync('rustfmt', ['--', fileName])
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}