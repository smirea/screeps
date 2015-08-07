(function() {
  var Util,
    slice = [].slice;

  module.exports = Util = {
    extend: function() {
      var base, i, key, len, obj, rest, value;
      base = arguments[0], rest = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (i = 0, len = rest.length; i < len; i++) {
        obj = rest[i];
        if (rest != null) {
          for (key in obj) {
            value = obj[key];
            base[key] = value;
          }
        }
      }
      return base;
    },
    defaults: function() {
      var base, i, key, len, other, rest, val;
      base = arguments[0], rest = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (i = 0, len = rest.length; i < len; i++) {
        other = rest[i];
        for (key in other) {
          val = other[key];
          if (!(key in base)) {
            base[key] = val;
          }
        }
      }
      return base;
    }
  };

}).call(this);
