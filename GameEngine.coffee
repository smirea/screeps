
util = require 'util'

BaseClass = require 'BaseClass'
Creep = require 'Creep'
Spawn = require 'Spawn'

module.exports = class GameEngine extends BaseClass

    spawns: null
    creeps: null

    initialize: ->
        @updateResources()
        return

    updateResources: ->
        @spawns = {}
        @spawns[name] = new Spawn obj for name, obj of Game.spawns when obj.my
        @creeps = {}
        @creeps[name] = new Creep obj for name, obj of Game.creeps when obj.my
        return

    tick: ->
        @trigger 'tick:before'
        spawn.tick() for name, spawn of @spawns
        creep.tick() for name, creep of @creeps
        @trigger 'tick:after'
        return
