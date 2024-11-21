/**
 * Classe `XirGlyphMorpher64` (alias `GM64`).
 *
 * Questa classe fornisce metodi statici per la gestione di stringhe UTF-16 e la loro codifica/decodifica in formato Base64.
 * Supporta stringhe con caratteri Unicode complessi, incluso il controllo sulla loro conformità a UTF-16 ben formata.
 * Inoltre, include un metodo per convertire dati binari da Blob in una stringa Base64.
 *
 * @author Xiradorn
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class XirGlyphMorpher64 {
	/**
	 * Converte una stringa Base64 in un array di byte (`Uint8Array`).
	 *
	 * @param base64 - La stringa Base64 da convertire.
	 * @returns Un array di byte (`Uint8Array`).
	 */
	private static base64ToBytes(base64: string): Uint8Array {
		const binString: string = atob(base64);
		return Uint8Array.from(binString, (m) => m.charCodeAt(0));
	}

	/**
	 * Converte un array di byte (`Uint8Array`) in una stringa codificata in Base64.
	 *
	 * @param bytes - L'array di byte da convertire.
	 * @returns Una stringa codificata in Base64.
	 */
	private static bytesToBase64(bytes: Uint8Array): string {
		const binString: string = String.fromCodePoint(...bytes);
		return btoa(binString);
	}

	/**
	 * Verifica se una stringa è ben formata secondo UTF-16.
	 *
	 * @param str - La stringa da verificare.
	 * @returns `true` se la stringa è ben formata, `false` altrimenti.
	 */
	private static isWellFormed(str: string) {
		if (typeof str.isWellFormed() !== "undefined") {
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
	 * Codifica una stringa UTF-16 in Base64.
	 *
	 * @param string - La stringa da codificare. Deve essere ben formata.
	 * @returns La stringa codificata in Base64 o `undefined` se la stringa non è ben formata.
	 */
	static encoder(string: string): string | undefined {
		if (XirGlyphMorpher64.isWellFormed(string)) {
			return XirGlyphMorpher64.bytesToBase64(
				new TextEncoder().encode(string)
			);
		} else {
			// This is not a well-formed string, so we handle that case.
			console.log(
				`Cannot process a string with lone surrogates: [${string}]`
			);
		}
	}

	/**
	 * Decodifica una stringa Base64 in una stringa UTF-16.
	 *
	 * @param base64 - La stringa Base64 da decodificare. Deve essere ben formata.
	 * @returns La stringa decodificata in UTF-16 o `undefined` se la stringa non è ben formata.
	 */
	static decoder(base64: string): string | undefined {
		if (XirGlyphMorpher64.isWellFormed(base64)) {
			return new TextDecoder().decode(
				XirGlyphMorpher64.base64ToBytes(base64)
			);
		} else {
			// This is not a well-formed string, so we handle that case.
			console.log(
				`Cannot process a string with lone surrogates: [${base64}]`
			);
		}
	}

	/**
	 * Converte un file Blob in una stringa Base64.
	 *
	 * @param blob - Il Blob da convertire in Base64.
	 * @returns Una stringa Base64 contenente i dati del Blob.
	 */
	static async fileIn64(blob: Blob): Promise<string> {
		const arrayBuffer = await blob.arrayBuffer();
		return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
	}
}

export { XirGlyphMorpher64 as XGM64 };
