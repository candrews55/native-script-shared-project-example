import {Injectable} from '@angular/core';
import {knownFolders, File, Folder} from 'tns-core-modules/file-system';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    private readonly rootPath: Folder = <Folder>knownFolders.documents();
    private readonly storageFileName = 'storage.txt';

    constructor() {
    }

    read(): any {
        const file: File = <File>this.rootPath.getFile(this.storageFileName);
        return file.readTextSync();
    }

    write(value: any): void {
        const file: File = <File>this.rootPath.getFile(this.storageFileName);
        file.writeTextSync(value.toString());
    }
}
