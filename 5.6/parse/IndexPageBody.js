// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './FsegEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./FsegEntry'));
  } else {
    root.IndexPageBody = factory(root.KaitaiStream, root.FsegEntry);
  }
}(this, function (KaitaiStream, FsegEntry) {
/**
 * @see storage/innobase/include/page0page.h
 */

var IndexPageBody = (function() {
  IndexPageBody.RecordType = Object.freeze({
    ORDINARY: 0,
    NODE_PTR: 1,
    INFIMUM: 2,
    SUPREMUM: 3,

    0: "ORDINARY",
    1: "NODE_PTR",
    2: "INFIMUM",
    3: "SUPREMUM",
  });

  IndexPageBody.RecordFormat = Object.freeze({
    REDUNDANT: 0,
    COMPACT: 1,

    0: "REDUNDANT",
    1: "COMPACT",
  });

  IndexPageBody.PageDirection = Object.freeze({
    PAGE_LEFT: 1,
    PAGE_RIGHT: 2,
    PAGE_NO_DIRECTION: 5,

    1: "PAGE_LEFT",
    2: "PAGE_RIGHT",
    5: "PAGE_NO_DIRECTION",
  });

  function IndexPageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  IndexPageBody.prototype._read = function() {
    this.indexHeader = new IndexHeader(this._io, this, this._root);
    this.fsegHeader = new FsegHeader(this._io, this, this._root);
    this.systemRecords = new SystemRecords(this._io, this, this._root);
    this.userRecords = this._io.readBytes((16256 - (this.indexHeader.numberOfDirectorySlots * 2)));
    this.pageDirectory = new Array(this.indexHeader.numberOfDirectorySlots);
    for (var i = 0; i < this.indexHeader.numberOfDirectorySlots; i++) {
      this.pageDirectory[i] = this._io.readU2be();
    }
  }

  var SystemRecords = IndexPageBody.SystemRecords = (function() {
    function SystemRecords(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    SystemRecords.prototype._read = function() {
      this.infimumRecord = new InfimumRecord(this._io, this, this._root);
      this.supremumRecord = new SupremumRecord(this._io, this, this._root);
    }

    return SystemRecords;
  })();

  var InfimumRecord = IndexPageBody.InfimumRecord = (function() {
    function InfimumRecord(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    InfimumRecord.prototype._read = function() {
      this.header = new RecordHeader(this._io, this, this._root);
      this.data = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
    }

    return InfimumRecord;
  })();

  var IndexHeader = IndexPageBody.IndexHeader = (function() {
    function IndexHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    IndexHeader.prototype._read = function() {
      this.numberOfDirectorySlots = this._io.readU2be();
      this.heapTopPos = this._io.readU2be();
      this.format = this._io.readBitsInt(1);
      this.numberOfHeapRecords = this._io.readBitsInt(15);
      this._io.alignToByte();
      this.firstGarbageRecordOffset = this._io.readU2be();
      this.garbageSpace = this._io.readU2be();
      this.lastInsertPos = this._io.readU2be();
      this.pageDirection = this._io.readU2be();
      this.numberOfInsertsInPageDirection = this._io.readU2be();
      this.numberOfRecords = this._io.readU2be();
      this.maxTransactionId = this._io.readU8be();
      this.pageLevel = this._io.readU2be();
      this.indexId = this._io.readU8be();
    }

    /**
     * The byte offset of the “end” of the currently used page.
     * All space between the heap top and the end of the page directory is free space.
     */

    /**
     * The COMPACT record format is new in the Barracuda table format, while the
     * REDUNDANT record format is the original one in the Antelope table format
     * (neither of which had a name officially until Barracuda was created).
     * 
     * The COMPACT format mostly eliminated information that was redundantly stored
     * in each record and can be obtained from the data dictionary, such as the number
     * of fields, which fields are nullable, and which fields are dynamic length.
     */

    /**
     * The total number of records in the page, including the infimum and supremum
     * system records, and garbage (deleted) records.
     */

    /**
     * number of bytes in deleted records
     */

    /**
     * pointer to the last inserted record, or NULL if this info has been reset by a delete
     */

    /**
     * Three values are currently used for page direction: LEFT, RIGHT, and NO_DIRECTION.
     * This is an indication as to whether this page is experiencing sequential inserts (
     * to the left [lower values] or right [higher values]) or random inserts. At each
     * insert, the record at the last insert position is read and its key is compared to
     * the currently inserted record’s key, in order to determine insert direction.
     */

    /**
     * Once the page direction is set, any following inserts that don’t reset the direction
     * (due to their direction differing) will instead increment this value.
     */

    /**
     * The number of non-deleted user records in the page
     */

    /**
     * The maximum transaction ID of any modification to any record in this page.
     */

    /**
     * The level of this page in the index. Leaf pages are at level 0, and the level
     * increments up the B+tree from there. In a typical 3-level B+tree, the root will
     * be level 2, some number of internal non-leaf pages will be level 1, and leaf
     * pages will be level 0.
     * 
     * level of the node in an index tree; the leaf level is the level 0.
     */

    /**
     * The ID of the index this page belongs to.
     */

    return IndexHeader;
  })();

  var SupremumRecord = IndexPageBody.SupremumRecord = (function() {
    function SupremumRecord(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    SupremumRecord.prototype._read = function() {
      this.header = new RecordHeader(this._io, this, this._root);
      this.data = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
    }

    return SupremumRecord;
  })();

  /**
   * @see storage/innobase/include/fsp0types.h
   */

  var FsegHeader = IndexPageBody.FsegHeader = (function() {
    function FsegHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FsegHeader.prototype._read = function() {
      this.leafPagesInode = new FsegEntry(this._io, this, null);
      this.internalInode = new FsegEntry(this._io, this, null);
    }

    return FsegHeader;
  })();

  var RecordHeader = IndexPageBody.RecordHeader = (function() {
    function RecordHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    RecordHeader.prototype._read = function() {
      this.unusedFlags = this._io.readBitsInt(2);
      this.deletedFlag = this._io.readBitsInt(1) != 0;
      this.minRecFlag = this._io.readBitsInt(1) != 0;
      this.numberOfRecordsOwned = this._io.readBitsInt(4);
      this.heapNo = this._io.readBitsInt(13);
      this.recordType = this._io.readBitsInt(3);
      this._io.alignToByte();
      this.relativeOffsetOfNextRecord = this._io.readU2be();
    }

    /**
     * this bit is set if and only if the record is the first user record on
     * a non-leaf B-tree page that is the leftmost page on its level
     */

    /**
     * number of records owned by this record
     */

    /**
     * The order in which this record was inserted into the heap. Heap records
     * (which include infimum and supremum) are numbered from 0. Infimum is always
     * order 0, supremum is always order 1. User records inserted will be numbered
     * from 2.
     */

    return RecordHeader;
  })();

  return IndexPageBody;
})();
return IndexPageBody;
}));
