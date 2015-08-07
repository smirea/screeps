(function() {
  var BaseClass, Creep, builderRole, harvesterRole, meleeRole,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseClass = require('BaseClass');

  harvesterRole = require('harvester-role');

  meleeRole = require('melee-role');

  builderRole = require('builder-role');

  module.exports = Creep = (function(superClass) {
    extend(Creep, superClass);

    function Creep() {
      return Creep.__super__.constructor.apply(this, arguments);
    }

    Creep.ROLES = {
      builder: [MOVE, WORK],
      harvester: [MOVE, CARRY, WORK],
      melee: [MOVE, ATTACK],
      ranged: [MOVE, RANGED_ATTACK]
    };

    Creep.prototype.tick = function() {
      if (this.obj.spawning) {
        return;
      }
      if (!this.obj.memory.isInitialized) {
        this.obj.say(this.obj.memory.role);
        this.obj.memory.isInitialized = true;
      }
      switch (this.obj.memory.role) {
        case 'harvester':
          harvesterRole(this);
          break;
        case 'melee':
          meleeRole(this);
          break;
        case 'builder':
          builderRole(this);
          break;
        default:
          console.log('[Creep] Not Handled:', this.obj.memory.role);
      }
    };

    Creep.prototype.find = function(type, options) {
      var i, len, obj, ref, result;
      result = [];
      ref = this.obj.room.find(type, options);
      for (i = 0, len = ref.length; i < len; i++) {
        obj = ref[i];
        result.push({
          obj: obj,
          range: obj.pos.getRangeTo(this.obj)
        });
      }
      result.sort(function(a, b) {
        return a.range - b.range;
      });
      result = (function() {
        var j, len1, results;
        results = [];
        for (j = 0, len1 = result.length; j < len1; j++) {
          obj = result[j].obj;
          results.push(obj);
        }
        return results;
      })();
      return result;
    };

    Creep.prototype.findClosest = function(type, options) {
      var ref;
      return (ref = this.find(type, options)[0]) != null ? ref : null;
    };

    return Creep;

  })(BaseClass);

}).call(this);
