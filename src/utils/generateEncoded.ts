import { randomBytes } from 'crypto';

export function generateEncoded() {
  let encode = '';
  const possible = randomBytes(20).toString('base64');

  for (let index = 0; index < 7; index++) {
    encode += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return encode;
}
