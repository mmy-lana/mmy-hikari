const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('hikari.selectTheme', async () => {
    const variants = [
      { label: '$(color-mode) Hikari Charcoal (Dark)', theme: 'Hikari Charcoal (Dark)' },
      { label: '$(color-mode) Hikari Midnight (OLED Dark)', theme: 'Hikari Midnight (OLED Dark)' },
      { label: '$(color-mode) Hikari Paper (Light)', theme: 'Hikari Paper (Light)' },
      { label: '$(color-mode) Hikari E-Book (Warm Sepia Light)', theme: 'Hikari E-Book (Warm Sepia Light)' }
    ];

    const selected = await vscode.window.showQuickPick(variants, {
      placeHolder: 'Choose a Hikari theme variant'
    });

    if (selected) {
      await vscode.workspace
        .getConfiguration('workbench')
        .update('colorTheme', selected.theme, vscode.ConfigurationTarget.Global);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};