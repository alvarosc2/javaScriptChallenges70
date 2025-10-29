import * as fs from 'fs';
import * as path from 'path';

function createFolderStructure(folderPath: string): void {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Folder created at: ${folderPath}`);
    } else {
        console.log(`Folder already exists at: ${folderPath}`);
    }
}

export { createFolderStructure };