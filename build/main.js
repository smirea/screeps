(function() {
  var GameEngine, gameEngine;

  GameEngine = require('GameEngine');

  if (Memory.tmp == null) {
    Memory.tmp = {};
  }

  gameEngine = new GameEngine({
    memory: Memory.gameEngine
  });

  gameEngine.on('tick:before', function() {
    var base, name, order, ref, spawn;
    order = ['harvester', 'harvester', 'harvester', 'builder', 'melee'];
    if ((base = Memory.tmp).counter == null) {
      base.counter = -1;
    }
    ref = this.spawns;
    for (name in ref) {
      spawn = ref[name];
      if (!spawn.obj.memory.buildQueue.length) {
        spawn.build(order[++Memory.tmp.counter % order.length]);
      }
    }
  });

  gameEngine.tick();

  Memory.gameEngine = gameEngine["export"]();

  module.exports = gameEngine;

}).call(this);
