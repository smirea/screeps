(function() {
  module.exports = function(creep) {
    var source, spawn;
    spawn = creep.findClosest(FIND_MY_SPAWNS);
    source = creep.findClosest(FIND_SOURCES);
    if (creep.obj.carry.energy < creep.obj.carryCapacity) {
      creep.obj.moveTo(source);
      return creep.obj.harvest(source);
    } else {
      creep.obj.moveTo(spawn);
      return creep.obj.transferEnergy(spawn);
    }
  };

}).call(this);
