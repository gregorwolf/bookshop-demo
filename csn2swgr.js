const cds = require ('@sap/cds')
const options = {
    skip_foreign_keys: true,
    // simple_refs: true,
}

const { Association, Composition, entity, array, struct, string } = cds.builtin.classes
const TypeMappings = {
	number: { type: 'number', format: 'double' },
	boolean: { type: 'boolean', },
	string: { type: 'string', },
	UUID: { type: 'string', format: 'uuid' },
	Integer16: { type: 'integer', format: 'int16' },
	Integer32: { type: 'integer', format: 'int32' },
	Integer64: { type: 'integer', format: 'int64' },
	Float: { type: 'number', format: 'float' },
	Date: { type: 'string', format: 'date' },
	DateTime: { type: 'string', format: 'date-time' },
	Binary: { type: 'string', format: 'binary' },
}; for (let each in TypeMappings) {
    cds.builtin.types[each]._schema = TypeMappings[each]
}

module.exports = (csn, service) => {


    let m = cds.linked (csn)
    const srv = service ? m.all('service').find (d => d.name.includes(service)) : m.find ('service')
    if (srv)  m = cds.linked (cds.compile.for.odata(csn))
    const namespace = srv ? srv.name : m.namespace || ''
    const visited = {}

    const targets = {}, types = { __proto__: targets }

    const entities = m.entities (namespace)
    for (let e in entities) {
        targets[e] = {}
        targets[e] = _define (entities[e])
    }
    return {
        openapi: '3.0.0', info: {
            title: namespace || 'all entities',
            description: `generated from ${m._sources[0]}`,
            version: '0.0.0'
        },
        components: {
            schemas: Object.assign(targets,types)
        },
        paths: {},
    }

    function _define (d) {
        if (d.name in visited) return; else visited[d.name] = true
        if (d.type && !(d.type in cds.builtin.types))  return $ref2(d.type)
        if (d instanceof Composition)  return _Composition(d)
        if (d instanceof Association)  return _Association(d)
        if (d instanceof entity)  return _entity(d)
        if (d instanceof struct)  return _struct(d)
        if (d instanceof array)  return _array(d)
        if (d instanceof string)  return _string(d)
        else  return _any(d)
    }

    function _entity (def) {
        return {properties: _properties4 (def.elements) }
    }

    function _any (def) {
        const x = Object.assign ({}, def._schema)
        const f = def['@format']; if (f) x.format = f
        return x
    }

    function _array (def) {
        const {type} = def.items
        return $arrayOf (_define (def.items))
    }

    function _string (def) {
        let s = _any(def); if (s.$ref) return s
        if (def.length) s.maxLength = def.length
        if (def.enum) s.enum = Object.keys (def.enum)
        return s
    }

    function _struct (def) {
        return { properties: _properties4(def.elements) }
    }

    function _properties4 (elements, filter=()=>true) {
        const properties = {}
        for (let each in elements) {
            if (options.skip_foreign_keys) {
                const [ head, tail ] = each.split('_')
                if (tail && elements[head] instanceof Association)  continue
            }
            const e = elements[each]; if (!filter(e))  continue
            const x = _define(e); if (!x) continue
            const d = e['@description'];  if(d && !d.startsWith('{i18n>')) x.description = d
            properties[each] = x
        }
        return properties
    }

    function _Association (a) {
        let spec = $ref2 (a.target)
        if (options.simple_refs) {
            const keys = Object.keys(a._target.keys)
            if (keys.length == 1) spec = {oneOf:[ spec, {$ref: `${spec.$ref}/properties/${keys[0]}`} ]}
        }
        if (a.is2many) spec = $arrayOf (spec)
        return spec
    }

    function _Composition (a) {
        if (a.is2many)  return $arrayOf ($ref2 (a.target))
        else  return $ref2 (a.target)
    }

    function $ref2 (type, def) {
        const name = _name4 (type)
        if (!types[name])  types[name] = def || _define (m.definitions[type], name)
        return { $ref: `#/components/schemas/${name}` }
    }

    function $arrayOf (items) {
        return { type:'array', items }
    }

    function _name4 (type) {
        return type.startsWith(namespace+'.') ? type.slice (namespace.length+1) : type
    }

}


if (!module.parent) {

    const [,, model ] = process.argv
    if (!model)  return console.error ('Please specify a cds model to process')
    cds.compile.to.swgr = module.exports

    cds.load (model)
    .then (cds.compile.to.swgr)
//    .then (cds.compile.to.yml)
    .then (function(result) {
        console.log(JSON.stringify(result))
    })
    .catch (console.error)
}