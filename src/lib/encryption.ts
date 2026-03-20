import CryptoJS from 'crypto-js';

// The encryption key should ideally be stored securely in .env.local
// Example: NEXT_PUBLIC_ENCRYPTION_KEY="uqms-super-secret-aes-key-2026"
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'uqms-default-fallback-key-12345';

/**
 * Encrypts plain text using AES encryption.
 * @param text The plain text to encrypt
 * @returns The encrypted ciphertext string
 */
export const encryptData = (text: string): string => {
  if (!text) return text;
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

/**
 * Decrypts AES ciphertext back to plain text. 
 * Includes a fallback mechanism so unencrypted mock data doesn't crash the app.
 * @param ciphertext The encrypted string
 * @returns The decrypted plain text
 */
export const decryptData = (ciphertext: string): string => {
  if (!ciphertext) return ciphertext;
  
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    // If decryption fails (e.g., plain text), it usually returns an empty string
    return originalText || ciphertext; 
  } catch (e) {
    // Fallback to raw text if it wasn't encrypted to begin with
    return ciphertext;
  }
};
