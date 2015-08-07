(function() {
  var BaseClass, Creep, GameEngine, Spawn, util,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  util = require('util');

  BaseClass = require('BaseClass');

  Creep = require('Creep');

  Spawn = require('Spawn');

  module.exports = GameEngine = (function(superClass) {
    extend(GameEngine, superClass);

    function GameEngine() {
      return GameEngine.__super__.constructor.apply(this, arguments);
    }

    GameEngine.prototype.spawns = null;

    GameEngine.prototype.creeps = null;

    GameEngine.prototype.initialize = function() {
      this.updateResources();
    };

    GameEngine.prototype.updateResources = function() {
      var name, obj, ref, ref1;
      this.spawns = {};
      ref = Game.spawns;
      for (name in ref) {
        obj = ref[name];
        if (obj.my) {
          this.spawns[name] = new Spawn(obj);
        }
      }
      this.creeps = {};
      ref1 = Game.creeps;
      for (name in ref1) {
        obj = ref1[name];
        if (obj.my) {
          this.creeps[name] = new Creep(obj);
        }
      }
    };

    GameEngine.prototype.tick = function() {
      var creep, name, ref, ref1, spawn;
      this.trigger('tick:before');
      ref = this.spawns;
      for (name in ref) {
        spawn = ref[name];
        spawn.tick();
      }
      ref1 = this.creeps;
      for (name in ref1) {
        creep = ref1[name];
        creep.tick();
      }
      this.trigger('tick:after');
    };

    return GameEngine;

  })(BaseClass);

}).call(this);
