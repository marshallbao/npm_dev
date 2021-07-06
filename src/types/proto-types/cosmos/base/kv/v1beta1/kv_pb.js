// source: cosmos/base/kv/v1beta1/kv.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.cosmos.base.kv.v1beta1.Pair', null, global);
goog.exportSymbol('proto.cosmos.base.kv.v1beta1.Pairs', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.kv.v1beta1.Pairs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.base.kv.v1beta1.Pairs.repeatedFields_, null);
};
goog.inherits(proto.cosmos.base.kv.v1beta1.Pairs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.kv.v1beta1.Pairs.displayName = 'proto.cosmos.base.kv.v1beta1.Pairs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.base.kv.v1beta1.Pair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.base.kv.v1beta1.Pair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.kv.v1beta1.Pair.displayName = 'proto.cosmos.base.kv.v1beta1.Pair';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.base.kv.v1beta1.Pairs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.base.kv.v1beta1.Pairs.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.kv.v1beta1.Pairs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.kv.v1beta1.Pairs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.kv.v1beta1.Pairs.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairsList: jspb.Message.toObjectList(msg.getPairsList(),
    proto.cosmos.base.kv.v1beta1.Pair.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.kv.v1beta1.Pairs}
 */
proto.cosmos.base.kv.v1beta1.Pairs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.kv.v1beta1.Pairs;
  return proto.cosmos.base.kv.v1beta1.Pairs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.kv.v1beta1.Pairs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.kv.v1beta1.Pairs}
 */
proto.cosmos.base.kv.v1beta1.Pairs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.base.kv.v1beta1.Pair;
      reader.readMessage(value,proto.cosmos.base.kv.v1beta1.Pair.deserializeBinaryFromReader);
      msg.addPairs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.kv.v1beta1.Pairs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.kv.v1beta1.Pairs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.kv.v1beta1.Pairs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.kv.v1beta1.Pairs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cosmos.base.kv.v1beta1.Pair.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Pair pairs = 1;
 * @return {!Array<!proto.cosmos.base.kv.v1beta1.Pair>}
 */
proto.cosmos.base.kv.v1beta1.Pairs.prototype.getPairsList = function() {
  return /** @type{!Array<!proto.cosmos.base.kv.v1beta1.Pair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.base.kv.v1beta1.Pair, 1));
};


/**
 * @param {!Array<!proto.cosmos.base.kv.v1beta1.Pair>} value
 * @return {!proto.cosmos.base.kv.v1beta1.Pairs} returns this
*/
proto.cosmos.base.kv.v1beta1.Pairs.prototype.setPairsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.base.kv.v1beta1.Pair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.kv.v1beta1.Pair}
 */
proto.cosmos.base.kv.v1beta1.Pairs.prototype.addPairs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.base.kv.v1beta1.Pair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.base.kv.v1beta1.Pairs} returns this
 */
proto.cosmos.base.kv.v1beta1.Pairs.prototype.clearPairsList = function() {
  return this.setPairsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.kv.v1beta1.Pair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.kv.v1beta1.Pair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.kv.v1beta1.Pair.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.base.kv.v1beta1.Pair}
 */
proto.cosmos.base.kv.v1beta1.Pair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.kv.v1beta1.Pair;
  return proto.cosmos.base.kv.v1beta1.Pair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.kv.v1beta1.Pair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.kv.v1beta1.Pair}
 */
proto.cosmos.base.kv.v1beta1.Pair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.kv.v1beta1.Pair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.kv.v1beta1.Pair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.kv.v1beta1.Pair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.kv.v1beta1.Pair} returns this
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.base.kv.v1beta1.Pair} returns this
 */
proto.cosmos.base.kv.v1beta1.Pair.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.base.kv.v1beta1);
