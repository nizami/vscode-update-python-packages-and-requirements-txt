import * as vscode from 'vscode';
import * as fs from 'fs';
import * as child_process from 'child_process';
import { window, ProgressLocation } from 'vscode';




export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "update-python-packages-and-requirements-txt" is now active!');
	console.log(__dirname)
	let disposable = vscode.commands.registerCommand('update-python-packages-and-requirements-txt', () => {

		const updateScript = fs.readFileSync(__dirname + '/../update.sh').toString();
		// const fullScript = `cd ${vscode.workspace.rootPath} && ${updateScript}`;

		if (ensureTerminalExists()) {
			selectTerminal().then(terminal => {
				if (terminal) {
					terminal.sendText(updateScript);
				}
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }

function selectTerminal(): Thenable<vscode.Terminal | undefined> {
	interface TerminalQuickPickItem extends vscode.QuickPickItem {
		terminal: vscode.Terminal;
	}
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	if (terminals.length === 1) {
		return Promise.resolve(terminals[0]);
	}
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `name: ${t.name}`,
			terminal: t
		};
	});
	return vscode.window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}

function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
	}
	return true;
}