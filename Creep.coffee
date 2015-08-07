
BaseClass = require 'BaseClass'

harvesterRole = require 'harvester-role'
meleeRole = require 'melee-role'
builderRole = require 'builder-role'

module.exports = class Creep extends BaseClass

    @ROLES:
        builder: [MOVE, WORK]
        harvester: [MOVE, CARRY, WORK]
        melee: [MOVE, ATTACK]
        ranged: [MOVE, RANGED_ATTACK]

    tick: ->
        return if @obj.spawning
        unless @obj.memory.isInitialized
            @obj.say @obj.memory.role
            @obj.memory.isInitialized = true
        switch @obj.memory.role
            when 'harvester' then harvesterRole @
            when 'melee' then meleeRole @
            when 'builder' then builderRole @
            else
                console.log '[Creep] Not Handled:', @obj.memory.role
        return

    find: (type, options) ->
        result = []
        for obj in @obj.room.find type, options
            result.push
                obj: obj
                range: obj.pos.getRangeTo @obj
        result.sort (a, b) -> a.range - b.range
        result = (obj for {obj} in result)
        result

    findClosest: (type, options) -> @find(type, options)[0] ? null
