
module.exports = (creep) ->
    enemy = creep.findClosest FIND_HOSTILE_CREEPS
    creep.obj.moveTo enemy
    creep.obj.attack enemy
    return
