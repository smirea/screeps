
module.exports = Util =
    extend: (base, rest...) ->
        for obj in rest when rest?
            for key, value of obj
                base[key] = value
        base

    defaults: (base, rest...) ->
        for other in rest
            for key, val of other when key not of base
                base[key] = val
        base
