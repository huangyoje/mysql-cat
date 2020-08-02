// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './ListBaseNode', './ListNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./ListBaseNode'), require('./ListNode'));
  } else {
    root.InodePageBody = factory(root.KaitaiStream, root.ListBaseNode, root.ListNode);
  }
}(this, function (KaitaiStream, ListBaseNode, ListNode) {
/**
 * @see storage/innobase/include/fsp0fsp.h
 */

var InodePageBody = (function() {
  function InodePageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  InodePageBody.prototype._read = function() {
    this.inodePageList = new ListNode(this._io, this, null);
    this.inodeEntries = new Array(85);
    for (var i = 0; i < 85; i++) {
      this.inodeEntries[i] = new InodeEntry(this._io, this, this._root);
    }
    this.emptySpaces = this._io.readBytes(6);
  }

  var InodeEntry = InodePageBody.InodeEntry = (function() {
    function InodeEntry(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    InodeEntry.prototype._read = function() {
      this.fsegId = this._io.readU8be();
      this.numberOfUsedPagesInNotFullList = this._io.readU4be();
      this.listBaseNodeForFreeList = new ListBaseNode(this._io, this, null);
      this.listBaseNodeForNotFullList = new ListBaseNode(this._io, this, null);
      this.listBaseNodeForFullList = new ListBaseNode(this._io, this, null);
      this.magicNumber = this._io.readU4be();
      this.fsegFragArr = new Array(32);
      for (var i = 0; i < 32; i++) {
        this.fsegFragArr[i] = this._io.readU4be();
      }
    }

    /**
     * Extents that are completely unused and are allocated to this file segment.
     */

    /**
     * Extents with at least one used page allocated to this file segment. When
     * the last free page is used, the extent is moved to the FULL list.
     */

    /**
     * Extents with no free pages allocated to this file segment. If a page becomes
     * free, the extent is moved to the NOT_FULL list.
     */

    /**
     * The value 97937874 is stored as a marker that this file segment INODE entry has been properly initialized.
     */

    return InodeEntry;
  })();

  return InodePageBody;
})();
return InodePageBody;
}));
