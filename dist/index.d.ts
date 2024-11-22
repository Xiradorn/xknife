/**
 * Classe `XirGlyphMorpher` (alias `XMorpher`).
 *
 * Questa classe fornisce metodi statici per:
 * - Gestire stringhe UTF-16 e verificarne la conformità.
 * - Codificare/decodificare stringhe in formato Base64.
 * - Convertire file Blob in Base64.
 * - Rappresentare stringhe Unicode in formato `\uXXXX`, incluso il supporto per caratteri surrogati.
 *
 * È progettata per applicazioni che richiedono un trattamento preciso dei dati Unicode,
 * soprattutto in ambienti in cui è necessaria la compatibilità con Base64 e la gestione di caratteri complessi.
 *
 * @author Xiradorn
 */
declare class XirGlyphMorpher {
    /**
     * Converte una stringa Base64 in un array di byte (`Uint8Array`).
     *
     * @param base64 - La stringa Base64 da convertire.
     * @returns Un array di byte (`Uint8Array`).
     */
    private static base64ToBytes;
    /**
     * Converte un array di byte (`Uint8Array`) in una stringa codificata in Base64.
     *
     * @param bytes - L'array di byte da convertire.
     * @returns Una stringa codificata in Base64.
     */
    private static bytesToBase64;
    /**
     * Verifica se una stringa è ben formata secondo lo standard UTF-16.
     *
     * Se l'ambiente supporta il metodo `isWellFormed()`, lo utilizza direttamente.
     * In caso contrario, utilizza un fallback basato su `encodeURIComponent`.
     *
     * @param str - La stringa da verificare.
     * @returns `true` se la stringa è ben formata, `false` altrimenti.
     */
    private static isWellFormed;
    /**
     * Codifica una stringa UTF-16 in formato Base64.
     *
     * Prima di procedere, verifica che la stringa sia ben formata secondo UTF-16.
     *
     * @param string - La stringa da codificare.
     * @returns La stringa codificata in Base64 o `undefined` se la stringa non è ben formata.
     */
    static encoder(string: string): string | undefined;
    /**
     * Decodifica una stringa Base64 in una stringa UTF-16.
     *
     * Prima di procedere, verifica che la stringa sia ben formata.
     *
     * @param base64 - La stringa Base64 da decodificare.
     * @returns La stringa decodificata in UTF-16 o `undefined` se la stringa non è ben formata.
     */
    static decoder(base64: string): string | undefined;
    /**
     * Converte un file Blob in una stringa Base64.
     *
     * Questo metodo è asincrono e utilizza un `ArrayBuffer` per leggere i dati del Blob.
     *
     * @param blob - Il Blob da convertire in Base64.
     * @returns Una stringa Base64 contenente i dati del Blob.
     */
    static fileIn64(blob: Blob): Promise<string>;
    /**
     * Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`.
     *
     * Questo metodo supporta solo caratteri all'interno del Basic Multilingual Plane (BMP).
     *
     * @param str - La stringa da convertire.
     * @returns Una stringa in formato `\uXXXX`.
     */
    static toUnicode(str: string): string;
    /**
     * Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`,
     * gestendo anche caratteri fuori dal BMP (caratteri surrogati).
     *
     * @param str - La stringa da convertire.
     * @returns Una stringa in formato `\uXXXX` che supporta caratteri surrogati.
     */
    static toUnicodeSurrogates(str: string): string;
}

export { XirGlyphMorpher as XMorpher, XirGlyphMorpher };
