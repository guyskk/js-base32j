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

base32j.encode('hello world')          // 'd1kqsv3f41vqywmccg'
base32j.encode('d1kqsv3f41vqywmccg')   // 'hello world'
```
