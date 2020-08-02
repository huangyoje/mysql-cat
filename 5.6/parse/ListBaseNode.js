// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './FileSpaceAddr'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./FileSpaceAddr'));
  } else {
    root.ListBaseNode = factory(root.KaitaiStream, root.FileSpaceAddr);
  }
}(this, function (KaitaiStream, FileSpaceAddr) {
var ListBaseNode = (function() {
  function ListBaseNode(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  ListBaseNode.prototype._read = function() {
    this.listLength = this._io.readU4be();
    this.firstNode = new FileSpaceAddr(this._io, this, null);
    this.lastNode = new FileSpaceAddr(this._io, this, null);
  }

  return ListBaseNode;
})();
return ListBaseNode;
}));
