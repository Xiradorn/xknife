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
export class XirGlyphMorpher {
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
	private static base64ToBytes(base64: string): Uint8Array {
		const binString: string = atob(base64);
		return Uint8Array.from(binString, (m) => m.charCodeAt(0));
	}

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
	private static bytesToBase64(bytes: Uint8Array): string {
		const binString: string = String.fromCodePoint(...bytes);
		return btoa(binString);
	}

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
	private static isWellFormed(str: string): boolean {
		if (typeof str.isWellFormed === "function") {
			return str.isWellFormed();
		} else {
			try {
				encodeURIComponent(str);
				return true;
			} catch (error) {
				return false;
			}
		}
	}

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
	static encoder(string: string): string | undefined {
		if (XirGlyphMorpher.isWellFormed(string)) {
			return XirGlyphMorpher.bytesToBase64(
				new TextEncoder().encode(string)
			);
		} else {
			console.warn(`Stringa non valida: [${string}]`);
		}
	}

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
	static decoder(base64: string): string | undefined {
		if (XirGlyphMorpher.isWellFormed(base64)) {
			return new TextDecoder().decode(
				XirGlyphMorpher.base64ToBytes(base64)
			);
		} else {
			console.warn(`Stringa Base64 non valida: [${base64}]`);
		}
	}

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
	static async fileIn64(blob: Blob): Promise<string> {
		const arrayBuffer = await blob.arrayBuffer();
		return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
	}

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
	static toUnicode(str: string): string {
		return str
			.split("")
			.map((char) => {
				const code = char.charCodeAt(0).toString(16).padStart(4, "0");
				return `\\u${code}`;
			})
			.join("");
	}

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
	static fromUnicode(unicodeStr: string): string {
		return unicodeStr.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
			String.fromCharCode(parseInt(hex, 16))
		);
	}
}

export { XirGlyphMorpher as XMorpher };
