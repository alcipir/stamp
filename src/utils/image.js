export default {
  _arrayBufferToBase64 (buffer) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  },
  entryToImage (entry) {
    let rawAvatar = entry.getEntryData()

    let value = entry.getHeadersList()[0].getValue()
    let avatarDataURL = 'data:' + value + ';base64,' + this._arrayBufferToBase64(rawAvatar)
    return avatarDataURL
  }

}
