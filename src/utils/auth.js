import crypto from 'crypto';

const SALT = 'sAruQ44A0jDbw0gr';

export function encryptPassword(password) {
  crypto.pbkdf2Sync(password, SALT, 10000, 64, 'sha512').toString('hex');
}