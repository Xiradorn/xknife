var t=class t{static base64ToBytes(t){const e=atob(t);return Uint8Array.from(e,(t=>t.charCodeAt(0)))}static bytesToBase64(t){const e=String.fromCodePoint(...t);return btoa(e)}static isWellFormed(t){if("function"==typeof t.isWellFormed)return t.isWellFormed();try{return encodeURIComponent(t),!0}catch(t){return!1}}static encoder(e){if(t.isWellFormed(e))return t.bytesToBase64((new TextEncoder).encode(e));console.log(`Cannot process a string with lone surrogates: [${e}]`)}static decoder(e){if(t.isWellFormed(e))return(new TextDecoder).decode(t.base64ToBytes(e));console.log(`Cannot process a string with lone surrogates: [${e}]`)}static async fileIn64(t){const e=await t.arrayBuffer();return btoa(String.fromCharCode(...new Uint8Array(e)))}static toUnicode(t){return t.split("").map((t=>`\\u${t.charCodeAt(0).toString(16).padStart(4,"0")}`)).join("")}static toUnicodeSurrogates(t){return Array.from(t).map((t=>`\\u${t.codePointAt(0).toString(16).padStart(4,"0")}`)).join("")}};export{t as XMorpher,t as XirGlyphMorpher};