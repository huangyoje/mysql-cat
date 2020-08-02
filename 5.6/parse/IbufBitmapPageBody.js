// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.IbufBitmapPageBody = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var IbufBitmapPageBody = (function() {
  function IbufBitmapPageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  IbufBitmapPageBody.prototype._read = function() {
    this.changeBufferBitmap = new Array(16384);
    for (var i = 0; i < 16384; i++) {
      this.changeBufferBitmap[i] = new IbufBitmapEntry(this._io, this, this._root);
    }
    this.emptySpaces = this._io.readBytes(8146);
  }

  var IbufBitmapEntry = IbufBitmapPageBody.IbufBitmapEntry = (function() {
    function IbufBitmapEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    IbufBitmapEntry.prototype._read = function() {
      this.freeSpace = this._io.readBitsInt(2);
      this.bufferedFlag = this._io.readBitsInt(1) != 0;
      this.changeBufferFlag = this._io.readBitsInt(1) != 0;
    }

    return IbufBitmapEntry;
  })();

  return IbufBitmapPageBody;
})();
return IbufBitmapPageBody;
}));
