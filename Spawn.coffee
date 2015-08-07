
util = require 'util'
BaseClass = require 'BaseClass'
Creep = require 'Creep'

module.exports = class Spawn extends BaseClass

    defaults: ->
        buildQueue: []

    build: (role, name, memory={}) ->
        memory.role = role
        @obj.memory.buildQueue.push [role, name, memory]
        return

    tick: ->
        if @obj.memory.buildQueue.length
            creep = @obj.memory.buildQueue.shift()
            [role, name, memory] = creep
            body = Creep.ROLES[role]
            if OK is @obj.canCreateCreep body, name
                @obj.createCreep body, name, memory
            else
                @obj.memory.buildQueue.unshift creep
        return
