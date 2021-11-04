import fs from 'fs';
import crypto from 'crypto-js';
import cryptorsa from 'node-rsa';

class EncryptionService {
  constructor() {

  }

  async encrypt(filePath, key) {
    
    return true;
  }

  async decrypt(filePath, privateKey) {
    return true;
  }

  async generateSharedKeys(publicKeys[], privateKey) {
    //return sharedKeys[]
    return true;
  }

  async generateFileHeader(sharedKeys[], publikKeys, filePath) {
    //attach header to file [{sharedKey: k, publicKey: p},{},{}...]
    return true;
  }

  async checkDefaultFoldersForKeypair() {
    if (process.platform === 'win32') {
      if (fs.existsSync(`${process.env.HOMEPATH}/.ssh/id_rsa`)) 
        return {privateKeyPath: `${process.env.HOMEPATH}/.ssh/id_rsa`}
      return {privateKeyPath: ``}
    }
    if (fs.existsSync(`~/.ssh/id_rsa`)) 
        return {privateKeyPath: `~/.ssh/id_rsa`}
      return {privateKeyPath: ``}
  }
}

export default EncryptionService;
