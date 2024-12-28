[**@xiradorn/xknife**](../README.md) • **Docs**

***

[@xiradorn/xknife](../globals.md) / XirGlyphMorpher

# Class: XirGlyphMorpher

Classe `XirGlyphMorpher` (alias `XMorpher`).

Questa classe fornisce metodi statici per la gestione avanzata di stringhe Unicode e dati codificati in Base64.
È progettata per supportare applicazioni che richiedono:
- Verifica della conformità delle stringhe UTF-16.
- Conversione tra stringhe e rappresentazioni Base64.
- Manipolazione e rappresentazione di stringhe Unicode, inclusa la gestione di caratteri complessi.
- Conversione di file Blob in Base64.

Supporta inoltre la rappresentazione e la decodifica di caratteri Unicode in formato `\uXXXX`,
inclusa la gestione di caratteri surrogati fuori dal Basic Multilingual Plane (BMP).

Questa classe è ideale per ambienti che necessitano di un trattamento preciso di stringhe Unicode
o interoperabilità con standard come Base64.

## Author

Xiradorn

## Constructors

### new XirGlyphMorpher()

> **new XirGlyphMorpher**(): [`XirGlyphMorpher`](XirGlyphMorpher.md)

#### Returns

[`XirGlyphMorpher`](XirGlyphMorpher.md)

## Methods

### decoder()

> `static` **decoder**(`base64`): `undefined` \| `string`

Decodifica una stringa Base64 in una stringa UTF-16.

Verifica che la stringa Base64 sia valida prima di procedere.

#### Parameters

• **base64**: `string`

La stringa Base64 da decodificare.

#### Returns

`undefined` \| `string`

La stringa decodificata in UTF-16 o `undefined` se la stringa non è valida.

#### Example

```ts
const base64 = "SGVsbG8=";
const str = XirGlyphMorpher.decoder(base64);
console.log(str); // "Hello"
```

#### Defined in

[morpher.class.ts:118](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/morpher.class.ts#L118)

***

### encoder()

> `static` **encoder**(`string`): `undefined` \| `string`

Codifica una stringa UTF-16 in formato Base64.

Verifica che la stringa sia ben formata prima di procedere.

#### Parameters

• **string**: `string`

La stringa UTF-16 da codificare.

#### Returns

`undefined` \| `string`

La stringa codificata in Base64 o `undefined` se la stringa non è valida.

#### Example

```ts
const str = "Hello";
const base64 = XirGlyphMorpher.encoder(str);
console.log(base64); // "SGVsbG8="
```

#### Defined in

[morpher.class.ts:95](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/morpher.class.ts#L95)

***

### fileIn64()

> `static` **fileIn64**(`blob`): `Promise`\<`string`\>

Converte un file Blob in una stringa Base64.

#### Parameters

• **blob**: `Blob`

Il file Blob da convertire.

#### Returns

`Promise`\<`string`\>

Una stringa Base64 contenente i dati del Blob.

#### Example

```ts
const blob = new Blob(["Hello"], { type: "text/plain" });
XirGlyphMorpher.fileIn64(blob).then(console.log); // "SGVsbG8="
```

#### Defined in

[morpher.class.ts:138](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/morpher.class.ts#L138)

***

### fromUnicode()

> `static` **fromUnicode**(`unicodeStr`): `string`

Converte una stringa in formato `\uXXXX` nel corrispondente testo normale.

#### Parameters

• **unicodeStr**: `string`

La stringa in formato `\uXXXX`.

#### Returns

`string`

Il testo normale corrispondente.

#### Example

```ts
const unicode = "\\u0048\\u0065\\u006c\\u006c\\u006f";
const str = XirGlyphMorpher.fromUnicode(unicode);
console.log(str); // "Hello"
```

#### Defined in

[morpher.class.ts:175](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/morpher.class.ts#L175)

***

### toUnicode()

> `static` **toUnicode**(`str`): `string`

Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`.

#### Parameters

• **str**: `string`

La stringa da convertire.

#### Returns

`string`

Una stringa in formato `\uXXXX` che rappresenta i caratteri Unicode.

#### Example

```ts
const str = "Hello";
const unicode = XirGlyphMorpher.toUnicode(str);
console.log(unicode); // "\u0048\u0065\u006c\u006c\u006f"
```

#### Defined in

[morpher.class.ts:154](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/morpher.class.ts#L154)
