(function() {
  module.exports = function(creep) {
    var enemy;
    enemy = creep.findClosest(FIND_HOSTILE_CREEPS);
    creep.obj.moveTo(enemy);
    creep.obj.attack(enemy);
  };

}).call(this);
