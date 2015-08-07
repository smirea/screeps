
GameEngine = require 'GameEngine'

Memory.tmp ?= {}

gameEngine = new GameEngine memory: Memory.gameEngine
gameEngine.on 'tick:before', ->
    order = ['harvester', 'harvester', 'harvester', 'builder', 'melee']
    Memory.tmp.counter ?= -1
    for name, spawn of @spawns when not spawn.obj.memory.buildQueue.length
        spawn.build order[++Memory.tmp.counter % order.length]
    return
gameEngine.tick()
Memory.gameEngine = gameEngine.export()

module.exports = gameEngine

