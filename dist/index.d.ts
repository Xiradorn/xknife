/**
 * Classe `XirGlyphMorpher` (alias `XMorpher`).
 *
 * Questa classe fornisce metodi statici per la gestione avanzata di stringhe Unicode e dati codificati in Base64.
 * È progettata per supportare applicazioni che richiedono:
 * - Verifica della conformità delle stringhe UTF-16.
 * - Conversione tra stringhe e rappresentazioni Base64.
 * - Manipolazione e rappresentazione di stringhe Unicode, inclusa la gestione di caratteri complessi.
 * - Conversione di file Blob in Base64.
 *
 * Supporta inoltre la rappresentazione e la decodifica di caratteri Unicode in formato `\uXXXX`,
 * inclusa la gestione di caratteri surrogati fuori dal Basic Multilingual Plane (BMP).
 *
 * Questa classe è ideale per ambienti che necessitano di un trattamento preciso di stringhe Unicode
 * o interoperabilità con standard come Base64.
 *
 * @author Xiradorn
 */
declare class XirGlyphMorpher {
    /**
     * Converte una stringa Base64 in un array di byte (`Uint8Array`).
     *
     * @param {string} base64 - La stringa Base64 da convertire.
     * @returns {Uint8Array} Un array di byte che rappresenta i dati della stringa Base64.
     * @throws {Error} Se la stringa Base64 non è valida.
     *
     * @example
     * const base64 = "SGVsbG8=";
     * const bytes = XirGlyphMorpher.base64ToBytes(base64);
     * console.log(bytes); // Uint8Array [72, 101, 108, 108, 111]
     */
    private static base64ToBytes;
    /**
     * Converte un array di byte (`Uint8Array`) in una stringa codificata in Base64.
     *
     * @param {Uint8Array} bytes - L'array di byte da convertire.
     * @returns {string} Una stringa codificata in Base64.
     *
     * @example
     * const bytes = new Uint8Array([72, 101, 108, 108, 111]);
     * const base64 = XirGlyphMorpher.bytesToBase64(bytes);
     * console.log(base64); // "SGVsbG8="
     */
    private static bytesToBase64;
    /**
     * Verifica se una stringa è ben formata secondo lo standard UTF-16.
     *
     * Se l'ambiente supporta il metodo `isWellFormed()`, lo utilizza direttamente.
     * Altrimenti, utilizza un fallback basato su `encodeURIComponent`.
     *
     * @param {string} str - La stringa da verificare.
     * @returns {boolean} `true` se la stringa è ben formata, `false` altrimenti.
     *
     * @example
     * const validString = "Hello";
     * console.log(XirGlyphMorpher.isWellFormed(validString)); // true
     *
     * const invalidString = "\uD800"; // Lone surrogate
     * console.log(XirGlyphMorpher.isWellFormed(invalidString)); // false
     */
    private static isWellFormed;
    /**
     * Codifica una stringa UTF-16 in formato Base64.
     *
     * Verifica che la stringa sia ben formata prima di procedere.
     *
     * @param {string} string - La stringa UTF-16 da codificare.
     * @returns {string | undefined} La stringa codificata in Base64 o `undefined` se la stringa non è valida.
     *
     * @example
     * const str = "Hello";
     * const base64 = XirGlyphMorpher.encoder(str);
     * console.log(base64); // "SGVsbG8="
     */
    static encoder(string: string): string | undefined;
    /**
     * Decodifica una stringa Base64 in una stringa UTF-16.
     *
     * Verifica che la stringa Base64 sia valida prima di procedere.
     *
     * @param {string} base64 - La stringa Base64 da decodificare.
     * @returns {string | undefined} La stringa decodificata in UTF-16 o `undefined` se la stringa non è valida.
     *
     * @example
     * const base64 = "SGVsbG8=";
     * const str = XirGlyphMorpher.decoder(base64);
     * console.log(str); // "Hello"
     */
    static decoder(base64: string): string | undefined;
    /**
     * Converte un file Blob in una stringa Base64.
     *
     * @param {Blob} blob - Il file Blob da convertire.
     * @returns {Promise<string>} Una stringa Base64 contenente i dati del Blob.
     *
     * @example
     * const blob = new Blob(["Hello"], { type: "text/plain" });
     * XirGlyphMorpher.fileIn64(blob).then(console.log); // "SGVsbG8="
     */
    static fileIn64(blob: Blob): Promise<string>;
    /**
     * Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`.
     *
     * @param {string} str - La stringa da convertire.
     * @returns {string} Una stringa in formato `\uXXXX` che rappresenta i caratteri Unicode.
     *
     * @example
     * const str = "Hello";
     * const unicode = XirGlyphMorpher.toUnicode(str);
     * console.log(unicode); // "\u0048\u0065\u006c\u006c\u006f"
     */
    static toUnicode(str: string): string;
    /**
     * Converte una stringa in formato `\uXXXX` nel corrispondente testo normale.
     *
     * @param {string} unicodeStr - La stringa in formato `\uXXXX`.
     * @returns {string} Il testo normale corrispondente.
     *
     * @example
     * const unicode = "\\u0048\\u0065\\u006c\\u006c\\u006f";
     * const str = XirGlyphMorpher.fromUnicode(unicode);
     * console.log(str); // "Hello"
     */
    static fromUnicode(unicodeStr: string): string;
}

/**
 * Classe `XirSeekerClass` (alias `XSeeker`).
 *
 * Questa classe fornisce metodi di utilità per estrarre valori associati a specifiche chiavi
 * da strutture di oggetti annidati. È particolarmente utile in scenari in cui si lavora
 * con oggetti JSON complessi o profondamente annidati.
 *
 * Il metodo principale utilizza una ricerca in profondità (DFS, Depth-First Search) per esplorare
 * l'intera struttura e raccogliere i valori desiderati in modo efficiente.
 *
 * @author Xiradorn
 */
declare class XirSeekerClass {
    /**
     * Estrae i valori associati a specifiche chiavi da una struttura annidata di oggetti.
     *
     * Questo metodo naviga attraverso un oggetto utilizzando un approccio iterativo basato su DFS
     * (Depth-First Search). Per ogni chiave specificata nella lista `targetKeys`, raccoglie tutti
     * i valori trovati e li organizza in un oggetto che associa ogni chiave a un array di valori.
     *
     * @param {object} obj - L'oggetto da esplorare. Deve essere un oggetto non nullo.
     * @param {string[]} targetKeys - Un array di stringhe rappresentanti le chiavi i cui valori
     * devono essere estratti.
     * @returns {Record<string, any[]>} Un oggetto che associa a ciascuna chiave dell'elenco `targetKeys`
     * un array contenente tutti i valori trovati in corrispondenza di quella chiave nella struttura annidata.
     * Se i parametri forniti non sono validi, restituisce un oggetto vuoto.
     *
     * @example
     * // Esempio di utilizzo con una struttura annidata:
     * const dati = {
     *   a: 1,
     *   b: { a: 2, c: 3 },
     *   c: [{ a: 4 }, { a: 5, d: 6 }],
     *   d: {
     *     e: { a: 7, c: 8 }
     *   }
     * };
     *
     * const risultato = XirSeekerClass.iterativeValuesFromKeysExtractor(dati, ['a', 'c']);
     * console.log(risultato);
     * // Output:
     * // {
     * //   a: [1, 2, 4, 5, 7],
     * //   c: [3, [{ a: 4 }, { a: 5, d: 6 }], 8]
     * // }
     *
     * @example
     * // Caso con parametri non validi:
     * const risultatoVuoto = XirSeekerClass.iterativeValuesFromKeysExtractor(null, ['a']);
     * console.log(risultatoVuoto); // Output: {}
     *
     * @example
     * // Esempio con struttura senza chiavi corrispondenti:
     * const dati2 = {
     *   x: 10,
     *   y: { z: 20 },
     *   z: [{ w: 30 }]
     * };
     * const risultato2 = XirSeekerClass.iterativeValuesFromKeysExtractor(dati2, ['a', 'b']);
     * console.log(risultato2);
     * // Output:
     * // {
     * //   a: [],
     * //   b: []
     * // }
     */
    static iterativeValuesFromKeysExtractor: (obj: any, targetKeys: string[]) => Record<string, Array<any>>;
}

export { XirGlyphMorpher as XMorpher, XirSeekerClass as XSeeker, XirGlyphMorpher, XirSeekerClass };
