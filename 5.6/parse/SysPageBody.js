// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './ListBaseNode', './FsegEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./ListBaseNode'), require('./FsegEntry'));
  } else {
    root.SysPageBody = factory(root.KaitaiStream, root.ListBaseNode, root.FsegEntry);
  }
}(this, function (KaitaiStream, ListBaseNode, FsegEntry) {
var SysPageBody = (function() {
  function SysPageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  SysPageBody.prototype._read = function() {
    this.rollbackSegmentHeader = new RollbackSegmentHeader(this._io, this, this._root);
    this.undoSegmentSlots = new Array(1024);
    for (var i = 0; i < 1024; i++) {
      this.undoSegmentSlots[i] = new UndoSegmentSlot(this._io, this, this._root);
    }
    this.emptySpace = this._io.readBytes(12208);
  }

  var RollbackSegmentHeader = SysPageBody.RollbackSegmentHeader = (function() {
    function RollbackSegmentHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    RollbackSegmentHeader.prototype._read = function() {
      this.maxSize = this._io.readU4be();
      this.historySize = this._io.readU4be();
      this.historyListBaseNode = new ListBaseNode(this._io, this, null);
      this.fsegEntry = new FsegEntry(this._io, this, null);
    }

    return RollbackSegmentHeader;
  })();

  var UndoSegmentSlot = SysPageBody.UndoSegmentSlot = (function() {
    function UndoSegmentSlot(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    UndoSegmentSlot.prototype._read = function() {
      this.unknown = this._io.readBytes(4);
    }

    return UndoSegmentSlot;
  })();

  return SysPageBody;
})();
return SysPageBody;
}));
