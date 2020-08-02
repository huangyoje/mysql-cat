// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './ListBaseNode', './FsegEntry', './ListNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./ListBaseNode'), require('./FsegEntry'), require('./ListNode'));
  } else {
    root.UndoLogPageBody = factory(root.KaitaiStream, root.ListBaseNode, root.FsegEntry, root.ListNode);
  }
}(this, function (KaitaiStream, ListBaseNode, FsegEntry, ListNode) {
var UndoLogPageBody = (function() {
  function UndoLogPageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  UndoLogPageBody.prototype._read = function() {
    this.undoPageHeader = new UndoPageHeader(this._io, this, this._root);
    this.undoSegmentHeader = new UndoSegmentHeader(this._io, this, this._root);
    this.undoRecords = this._io.readBytes(16290);
  }

  var UndoPageHeader = UndoLogPageBody.UndoPageHeader = (function() {
    function UndoPageHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    UndoPageHeader.prototype._read = function() {
      this.undoPageType = this._io.readBytes(2);
      this.latestLogRecordOffset = this._io.readBytes(2);
      this.freeSpaceOffset = this._io.readBytes(2);
      this.undoPageListNode = new ListNode(this._io, this, null);
    }

    return UndoPageHeader;
  })();

  var UndoSegmentHeader = UndoLogPageBody.UndoSegmentHeader = (function() {
    function UndoSegmentHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    UndoSegmentHeader.prototype._read = function() {
      this.state = this._io.readBytes(2);
      this.latestLogOffset = this._io.readBytes(2);
      this.undoSegmentFsegEntry = new FsegEntry(this._io, this, null);
      this.undoSegmentPageListBaseNode = new ListBaseNode(this._io, this, null);
    }

    return UndoSegmentHeader;
  })();

  return UndoLogPageBody;
})();
return UndoLogPageBody;
}));
