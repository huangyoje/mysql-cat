// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './FsegEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./FsegEntry'));
  } else {
    root.TrxSysPageBody = factory(root.KaitaiStream, root.FsegEntry);
  }
}(this, function (KaitaiStream, FsegEntry) {
var TrxSysPageBody = (function() {
  function TrxSysPageBody(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  TrxSysPageBody.prototype._read = function() {
    this.transactionId = this._io.readU8be();
    this.trxSysFsegEntry = this._io.readBytes(10);
    this.rollbackSegments = new Array(128);
    for (var i = 0; i < 128; i++) {
      this.rollbackSegments[i] = new RollbackSegment(this._io, this, this._root);
    }
    this.emptySpace0 = this._io.readBytes(13304);
    this.masterLogInfo = new LogInfo(this._io, this, this._root);
    this.emptySpace1 = this._io.readBytes(888);
    this.binaryLogInfo = new LogInfo(this._io, this, this._root);
    this.emptySpace2 = this._io.readBytes(688);
    this.doublewriteBufferInfo = new DoublewriteBufferInfo(this._io, this, this._root);
    this.emptySpace3 = this._io.readBytes(154);
  }

  var RollbackSegment = TrxSysPageBody.RollbackSegment = (function() {
    function RollbackSegment(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    RollbackSegment.prototype._read = function() {
      this.space = this._io.readBytes(4);
      this.page = this._io.readBytes(4);
    }

    return RollbackSegment;
  })();

  var LogInfo = TrxSysPageBody.LogInfo = (function() {
    function LogInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    LogInfo.prototype._read = function() {
      this.magicNumber = this._io.readBytes(4);
      this.logOffset = this._io.readBytes(8);
      this.logName = KaitaiStream.bytesToStr(this._io.readBytes(100), "ASCII");
    }

    return LogInfo;
  })();

  var DoublewriteBufferInfo = TrxSysPageBody.DoublewriteBufferInfo = (function() {
    function DoublewriteBufferInfo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    DoublewriteBufferInfo.prototype._read = function() {
      this.fsegEntry = new FsegEntry(this._io, this, null);
      this.magicNumber1 = this._io.readBytes(4);
      this.block1StartPage1 = this._io.readU4be();
      this.block2StartPage1 = this._io.readU4be();
      this.magicNumber2 = this._io.readBytes(4);
      this.block1StartPage2 = this._io.readU4be();
      this.block2StartPage2 = this._io.readU4be();
      this.spaceId = this._io.readU4be();
    }

    return DoublewriteBufferInfo;
  })();

  return TrxSysPageBody;
})();
return TrxSysPageBody;
}));
