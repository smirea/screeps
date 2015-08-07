
module.exports = (creep) ->
    site = creep.findClosest FIND_CONSTRUCTION_SITES
    if creep.obj.carry.energy
        creep.obj.moveTo site
        creep.obj.build site
    else
        spawn = creep.findClosest FIND_MY_SPAWNS
        creep.obj.moveTo spawn
        spawn.transferEnergy creep.obj, creep.obj.carryCapacity
    return
