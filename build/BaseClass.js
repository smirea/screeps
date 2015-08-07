(function() {
  var BaseClass, eventUtil, util;

  util = require('util');

  eventUtil = require('event-util');

  module.exports = BaseClass = (function() {
    util.extend(BaseClass.prototype, eventUtil.mixin);

    BaseClass.prototype.defaults = function() {
      return {};
    };

    function BaseClass(obj, options) {
      this.obj = obj;
      this.options = options != null ? options : {};
      this._listeners = {};
      util.defaults(this.obj.memory, this.defaults());
      if (typeof this.initialize === "function") {
        this.initialize.apply(this, arguments);
      }
    }

    BaseClass.prototype.tick = function() {};

    BaseClass.prototype["export"] = function() {
      return this.obj.memory;
    };

    return BaseClass;

  })();

}).call(this);
