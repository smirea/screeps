
module.exports = (creep) ->
    spawn = creep.findClosest FIND_MY_SPAWNS
    source = creep.findClosest FIND_SOURCES
    if creep.obj.carry.energy < creep.obj.carryCapacity
        creep.obj.moveTo source
        creep.obj.harvest source
    else
        creep.obj.moveTo spawn
        creep.obj.transferEnergy spawn
