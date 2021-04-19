// see also: https://github.com/guyskk/base32j
import { parse, stringify } from "./codec";
import { encodeUtf8, decodeUtf8 } from "./utf8";

const _base32Encoding = {
  chars: "0123456789abcdefghkmnpqrstuvwxyz",
  bits: 5,
};

/** bytes to base32 */
function encodeBytes(value) {
  let s = stringify(value, _base32Encoding);
  let padIdx = s.indexOf("=");
  if (padIdx >= 0) {
    s = s.substring(0, padIdx);
  }
  return s;
}

/** base32 to bytes */
function decodeBytes(value) {
  let pad = (8 - (value.length % 8)) % 8;
  for (let i = 0; i < pad; i++) {
    value += "=";
  }
  return parse(value, _base32Encoding);
}

/** string to base32 */
function encode(value) {
  return encodeBytes(encodeUtf8(value));
}

/** base32 to string */
function decode(value) {
  return decodeUtf8(decodeBytes(value));
}

export { encodeBytes, decodeBytes, encode, decode };
export default { encodeBytes, decodeBytes, encode, decode };
