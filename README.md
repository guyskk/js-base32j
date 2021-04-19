## JS-Base32j

Base32 exclude letter `i j l o`, without padding.  
Alphabet: `0123456789abcdefghkmnpqrstuvwxyz`

```
npm install js-base32j
```

See also: https://github.com/guyskk/base32j

## Usage

```javascript
import base32j from 'js-base32j'

base32j.encode('hello world')         // 'd1kqsv3f41vqywmccg'
base32j.decode('d1kqsv3f41vqywmccg')  // 'hello world'

let bytes = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
base32j.encodeBytes(bytes)                 // 'd1kqsv3f41vqywmccg'
base32j.decodeBytes('d1kqsv3f41vqywmccg')  // bytes above
```
