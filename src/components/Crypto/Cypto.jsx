import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";

export function encryptData(data, key) {
  return CryptoAES.encrypt(JSON.stringify(data), key).toString();
}

export function decryptData(ciphertext, key){

    
  const bytes = CryptoAES.decrypt(ciphertext, key);

  try {
    return JSON.parse(bytes.toString(CryptoENC));
  } catch (err) {
    return null;
  }
};
