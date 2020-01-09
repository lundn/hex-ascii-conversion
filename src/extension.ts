// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, "hex-ascii-conversion" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "hexAsciiConversion.commands.asciiToHex",
    () => {
      // The code you place here will be executed every time your command is executed

      const hexDelimiter = vscode.workspace
        .getConfiguration()
        .get<string>("hexAsciiConversion.hexDelimiter");

      // Get the active text editor
      let editor = vscode.window.activeTextEditor;

      if (editor) {
        let document = editor.document;
        let selection = editor.selection;

        // Get the word within the selection
        let ascii = document.getText(selection);
        let hex = asciiToHex(ascii, hexDelimiter);
        editor.edit(editBuilder => {
          editBuilder.replace(selection, hex);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

const asciiToHex = (value: string, hexDelimiter: string = " ") => {
  const hexArray: string[] = [];

  for (let n = 0, l = value.length; n < l; n++) {
    const hexValue = Number(value.charCodeAt(n)).toString(16);
    hexArray.push(hexValue);
  }

  return hexArray.join(hexDelimiter);
};
