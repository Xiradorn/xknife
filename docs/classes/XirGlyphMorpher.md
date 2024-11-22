[**@xiradorn/xknife**](../README.md) • **Docs**

***

[@xiradorn/xknife](../globals.md) / XirGlyphMorpher

# Class: XirGlyphMorpher

Classe `XirGlyphMorpher` (alias `XMorpher`).

Questa classe fornisce metodi statici per:
- Gestire stringhe UTF-16 e verificarne la conformità.
- Codificare/decodificare stringhe in formato Base64.
- Convertire file Blob in Base64.
- Rappresentare stringhe Unicode in formato `\uXXXX` e convertirle da/verso tale formato.
- Gestire caratteri complessi, inclusi quelli fuori dal Basic Multilingual Plane (BMP).

È progettata per applicazioni che richiedono un trattamento preciso dei dati Unicode,
soprattutto in ambienti in cui è necessaria la compatibilità con Base64 e la gestione di caratteri complessi.

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

Prima di procedere, verifica che la stringa sia ben formata.

#### Parameters

• **base64**: `string`

La stringa Base64 da decodificare.

#### Returns

`undefined` \| `string`

La stringa decodificata in UTF-16 o `undefined` se la stringa non è ben formata.

#### Defined in

[morpher.class.ts:89](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L89)

***

### encoder()

> `static` **encoder**(`string`): `undefined` \| `string`

Codifica una stringa UTF-16 in formato Base64.

Prima di procedere, verifica che la stringa sia ben formata secondo UTF-16.

#### Parameters

• **string**: `string`

La stringa da codificare.

#### Returns

`undefined` \| `string`

La stringa codificata in Base64 o `undefined` se la stringa non è ben formata.

#### Defined in

[morpher.class.ts:69](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L69)

***

### fileIn64()

> `static` **fileIn64**(`blob`): `Promise`\<`string`\>

Converte un file Blob in una stringa Base64.

Questo metodo è asincrono e utilizza un `ArrayBuffer` per leggere i dati del Blob.

#### Parameters

• **blob**: `Blob`

Il Blob da convertire in Base64.

#### Returns

`Promise`\<`string`\>

Una stringa Base64 contenente i dati del Blob.

#### Defined in

[morpher.class.ts:109](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L109)

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

#### Defined in

[morpher.class.ts:154](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L154)

***

### fromUnicodeSurrogates()

> `static` **fromUnicodeSurrogates**(`unicodeStr`): `string`

Converte una stringa in formato `\uXXXX` (anche con surrogati) nel corrispondente testo normale.

#### Parameters

• **unicodeStr**: `string`

La stringa in formato `\uXXXX`.

#### Returns

`string`

Il testo normale corrispondente.

#### Defined in

[morpher.class.ts:166](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L166)

***

### toUnicode()

> `static` **toUnicode**(`str`): `string`

Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`.

Questo metodo supporta solo caratteri all'interno del Basic Multilingual Plane (BMP).

#### Parameters

• **str**: `string`

La stringa da convertire.

#### Returns

`string`

Una stringa in formato `\uXXXX`.

#### Defined in

[morpher.class.ts:122](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L122)

***

### toUnicodeSurrogates()

> `static` **toUnicodeSurrogates**(`str`): `string`

Converte una stringa in una rappresentazione Unicode in formato `\uXXXX`,
gestendo anche caratteri fuori dal BMP (caratteri surrogati).

#### Parameters

• **str**: `string`

La stringa da convertire.

#### Returns

`string`

Una stringa in formato `\uXXXX` che supporta caratteri surrogati.

#### Defined in

[morpher.class.ts:139](https://github.com/Xiradorn/xknife/blob/9e3b823c09e74f8001d24ab2d2b60d629c8ec522/src/classes/morpher.class.ts#L139)
