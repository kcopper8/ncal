import {compress, decompress} from 'wasm-brotli';

export function doCompress(data) {
  return compress(Buffer.from(JSON.stringify(data))).then(compressed => {
    return Buffer.from(compressed).toString('base64');
  }).then(base64 => encodeURIComponent(base64));
}


export function doDecompress(compressedURI) {
  const compressedData = Buffer.from(decodeURIComponent(compressedURI), 'base64');
  return decompress(compressedData).then(decompressedBuffer => {
    return Buffer.from(decompressedBuffer).toString();
  }).then(json => JSON.parse(json));
}