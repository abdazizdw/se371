// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./mod-names')
const saySelem = require('./mod-utils')

require('./mod-add-numbers')
saySelem('mounir')
saySelem(names.first_name)
saySelem(names.last_name)
