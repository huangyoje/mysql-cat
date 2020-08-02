// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './Page'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./Page'));
  } else {
    root.TableSpace = factory(root.KaitaiStream, root.Page);
  }
}(this, function (KaitaiStream, Page) {
var TableSpace = (function() {
  function TableSpace(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  TableSpace.prototype._read = function() {
    this.pages1 = []
    var i = 0;
    do {
      var _ = new Page(this._io, this, null);
      this.pages1.push(_);
      i++;
    } while (!(_.header.pageNumber == 5));
    if (this.savePos1 == 0) {
      this.placeholder = this._io.readU1();
    }
  }
  Object.defineProperty(TableSpace.prototype, 'savePos1', {
    get: function() {
      if (this._m_savePos1 !== undefined)
        return this._m_savePos1;
      this._m_savePos1 = this._io.pos;
      return this._m_savePos1;
    }
  });
  Object.defineProperty(TableSpace.prototype, 'pages2', {
    get: function() {
      if (this._m_pages2 !== undefined)
        return this._m_pages2;
      var _pos = this._io.pos;
      this._io.seek(this.savePos1);
      this._m_pages2 = [];
      var i = 0;
      while (!this._io.isEof()) {
        this._m_pages2.push(new Page(this._io, this, null));
        i++;
      }
      this._io.seek(_pos);
      return this._m_pages2;
    }
  });

  return TableSpace;
})();
return TableSpace;
}));
