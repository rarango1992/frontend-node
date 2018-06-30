'use strict'

const http = require('http')
const path = require('path')
const express = require('express')
const chalk = require('chalk')
const socket = require('socket.io')
const debug = require('debug')('front-end:web')
const app = express()
const www = http.createServer(app)
const port = process.env.PORT || 3000
const io = socket(www)

io.on('connect', socket => {
  debug(`Socket.IO Client ${chalk.green.bold('connected')} with id: ${chalk.yellow.bold(socket.id)}`)
})

app.use(express.static(path.join(__dirname, '../public')))

function handleFatalError (err) {
  console.log(`${chalk.red.bold('Error fatal: ')} ${chalk.red(err.message)}`)
  console.log('Error Stack', err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

www.listen(port, () => {
  console.log(`Servidor Web Express y Socket.IO escuchando en puerto ${port}`)
})
