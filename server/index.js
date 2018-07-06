const express = require('express')
const next = require('next') 
const bodyParser = require('body-parser')
const logger = require('morgan');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let api = require('./api')

app.prepare()
  .then(() => {
    const server = express()

    server.use(logger('dev'));
    server.use(bodyParser.json());
    
    server.get('/login', api.login);

    server.get('/before-start', (req, res) => {
      return handle(req, res)
    })

    server.get('/dashboard', (req, res) => {
      return handle(req, res)
    })

    server.get('/tutorial', (req, res) => {
      return handle(req, res)
    })

    server.get('/', (req, res) => {
      return handle(req, res)
    })

    server.get('/static/**/*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })