
module.exports =
    mixin:
        _listeners: null

        on: (eventList, callback, context=@) ->
            for eventName in eventList.split ' '
                @_listeners[eventName] ?= []
                @_listeners[eventName].push {callback, context}
            return

        off: (eventName, callback, context) ->
            if typeof callback is 'function'
                eventList = []
                for event in @_listeners[eventName] ? [] when event.callback isnt callback
                    continue if context? and event.context isnt context
                    eventList.push event
                @_listeners[eventName] = eventList
            else
                delete @_listeners[eventName]
            return

        listenTo: (obj, eventList, callback) ->
            obj.on eventList, callback, @

        stopListeningTo: (obj, eventName, callback) ->
            obj.off eventName, callback, @

        trigger: (eventName, args) ->
            for {callback, context} in @_listeners[eventName] ? []
                callback.call context, args
            return
