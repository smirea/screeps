
util = require 'util'
eventUtil = require 'event-util'

module.exports = class BaseClass

    util.extend @::, eventUtil.mixin

    defaults: -> {}

    constructor: (@obj, @options={}) ->
        @_listeners = {}
        util.defaults @obj.memory, @defaults()
        @initialize? arguments...

    tick: -> #noop

    export: -> @obj.memory

    # export: -> @exportItem @state

    # exportItem: (obj) ->
    #     if typeof obj is 'object' and obj instanceof BaseClass
    #         return obj.export()
    #     result = {}
    #     for key, value of obj
    #         if Array.isArray value
    #             result[key] = []
    #             result[key].push @exportItem item for item in value
    #         else if typeof value is 'object'
    #             result[key] = @exportItem value
    #         else
    #             result[key] = value
    #     result

    # import: (state={}) ->
    #     util.defaults state, @defaults()
    #     return
