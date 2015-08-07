(function() {
  var BaseClass, Creep, Spawn, util,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  util = require('util');

  BaseClass = require('BaseClass');

  Creep = require('Creep');

  module.exports = Spawn = (function(superClass) {
    extend(Spawn, superClass);

    function Spawn() {
      return Spawn.__super__.constructor.apply(this, arguments);
    }

    Spawn.prototype.defaults = function() {
      return {
        buildQueue: []
      };
    };

    Spawn.prototype.build = function(role, name, memory) {
      if (memory == null) {
        memory = {};
      }
      memory.role = role;
      this.obj.memory.buildQueue.push([role, name, memory]);
    };

    Spawn.prototype.tick = function() {
      var body, creep, memory, name, role;
      if (this.obj.memory.buildQueue.length) {
        creep = this.obj.memory.buildQueue.shift();
        role = creep[0], name = creep[1], memory = creep[2];
        body = Creep.ROLES[role];
        if (OK === this.obj.canCreateCreep(body, name)) {
          this.obj.createCreep(body, name, memory);
        } else {
          this.obj.memory.buildQueue.unshift(creep);
        }
      }
    };

    return Spawn;

  })(BaseClass);

}).call(this);
