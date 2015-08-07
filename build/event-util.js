(function() {
  module.exports = {
    mixin: {
      _listeners: null,
      on: function(eventList, callback, context) {
        var base, eventName, i, len, ref;
        if (context == null) {
          context = this;
        }
        ref = eventList.split(' ');
        for (i = 0, len = ref.length; i < len; i++) {
          eventName = ref[i];
          if ((base = this._listeners)[eventName] == null) {
            base[eventName] = [];
          }
          this._listeners[eventName].push({
            callback: callback,
            context: context
          });
        }
      },
      off: function(eventName, callback, context) {
        var event, eventList, i, len, ref, ref1;
        if (typeof callback === 'function') {
          eventList = [];
          ref1 = (ref = this._listeners[eventName]) != null ? ref : [];
          for (i = 0, len = ref1.length; i < len; i++) {
            event = ref1[i];
            if (!(event.callback !== callback)) {
              continue;
            }
            if ((context != null) && event.context !== context) {
              continue;
            }
            eventList.push(event);
          }
          this._listeners[eventName] = eventList;
        } else {
          delete this._listeners[eventName];
        }
      },
      listenTo: function(obj, eventList, callback) {
        return obj.on(eventList, callback, this);
      },
      stopListeningTo: function(obj, eventName, callback) {
        return obj.off(eventName, callback, this);
      },
      trigger: function(eventName, args) {
        var callback, context, i, len, ref, ref1, ref2;
        ref1 = (ref = this._listeners[eventName]) != null ? ref : [];
        for (i = 0, len = ref1.length; i < len; i++) {
          ref2 = ref1[i], callback = ref2.callback, context = ref2.context;
          callback.call(context, args);
        }
      }
    }
  };

}).call(this);
