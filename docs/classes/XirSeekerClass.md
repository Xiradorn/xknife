[**@xiradorn/xknife**](../README.md) • **Docs**

***

[@xiradorn/xknife](../globals.md) / XirSeekerClass

# Class: XirSeekerClass

Classe `XirSeekerClass` (alias `XSeeker`).

Questa classe fornisce metodi di utilità per estrarre valori associati a specifiche chiavi
da strutture di oggetti annidati. È particolarmente utile in scenari in cui si lavora
con oggetti JSON complessi o profondamente annidati.

Il metodo principale utilizza una ricerca in profondità (DFS, Depth-First Search) per esplorare
l'intera struttura e raccogliere i valori desiderati in modo efficiente.

## Author

Xiradorn

## Constructors

### new XirSeekerClass()

> **new XirSeekerClass**(): [`XirSeekerClass`](XirSeekerClass.md)

#### Returns

[`XirSeekerClass`](XirSeekerClass.md)

## Methods

### iterativeValuesFromKeysExtractor()

> `static` **iterativeValuesFromKeysExtractor**(`obj`, `targetKeys`): `Record`\<`string`, `any`[]\>

Estrae i valori associati a specifiche chiavi da una struttura annidata di oggetti.

Questo metodo naviga attraverso un oggetto utilizzando un approccio iterativo basato su DFS
(Depth-First Search). Per ogni chiave specificata nella lista `targetKeys`, raccoglie tutti
i valori trovati e li organizza in un oggetto che associa ogni chiave a un array di valori.

#### Parameters

• **obj**: `any`

L'oggetto da esplorare. Deve essere un oggetto non nullo.

• **targetKeys**: `string`[]

Un array di stringhe rappresentanti le chiavi i cui valori
devono essere estratti.

#### Returns

`Record`\<`string`, `any`[]\>

Un oggetto che associa a ciascuna chiave dell'elenco `targetKeys`
un array contenente tutti i valori trovati in corrispondenza di quella chiave nella struttura annidata.
Se i parametri forniti non sono validi, restituisce un oggetto vuoto.

#### Examples

```ts
// Esempio di utilizzo con una struttura annidata:
const dati = {
  a: 1,
  b: { a: 2, c: 3 },
  c: [{ a: 4 }, { a: 5, d: 6 }],
  d: {
    e: { a: 7, c: 8 }
  }
};

const risultato = XirSeekerClass.iterativeValuesFromKeysExtractor(dati, ['a', 'c']);
console.log(risultato);
// Output:
// {
//   a: [1, 2, 4, 5, 7],
//   c: [3, [{ a: 4 }, { a: 5, d: 6 }], 8]
// }
```

```ts
// Caso con parametri non validi:
const risultatoVuoto = XirSeekerClass.iterativeValuesFromKeysExtractor(null, ['a']);
console.log(risultatoVuoto); // Output: {}
```

```ts
// Esempio con struttura senza chiavi corrispondenti:
const dati2 = {
  x: 10,
  y: { z: 20 },
  z: [{ w: 30 }]
};
const risultato2 = XirSeekerClass.iterativeValuesFromKeysExtractor(dati2, ['a', 'b']);
console.log(risultato2);
// Output:
// {
//   a: [],
//   b: []
// }
```

#### Defined in

[seeker.class.ts:67](https://github.com/Xiradorn/xknife/blob/074e65ee00cd901d8f8a39444890f890bb5aaec6/src/classes/seeker.class.ts#L67)
