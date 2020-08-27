import * as fs from 'fs'
import { writeFileSync, readFileSync } from 'fs'
import { Bank } from './Bank'

export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }
  writeInJSON(createAccountBank: Bank): void {
    fs.writeFileSync(this.fileName, JSON.stringify(createAccountBank, null, 2))
  }

  getObjectFromJSON(): Bank { 
    return JSON.parse(fs.readFileSync(this.fileName).toString());
  }
}
