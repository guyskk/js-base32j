// JavaScript进行UTF-8编码与解码
// https://www.jianshu.com/p/bfc99188a7fd

export function encodeUtf8(text) {
  const code = encodeURIComponent(text)
  const bytes = []
  for (var i = 0; i < code.length; i++) {
    const c = code.charAt(i)
    if (c === '%') {
      const hex = code.charAt(i + 1) + code.charAt(i + 2)
      const hexVal = parseInt(hex, 16)
      bytes.push(hexVal)
      i += 2
    } else bytes.push(c.charCodeAt(0))
  }
  return bytes
}

export function decodeUtf8(bytes) {
  var encoded = ''
  for (var i = 0; i < bytes.length; i++) {
    encoded += '%' + bytes[i].toString(16)
  }
  return decodeURIComponent(encoded)
}
