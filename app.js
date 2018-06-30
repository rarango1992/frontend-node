'use strict'

const color = require('chalk')
const debug = require('debug')('front-end:demo')

let msg = 'Hola mundo'

debug(`El mensaje es: ${color.yellow.bold(msg)}`)
