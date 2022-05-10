const categoriasControllers = require('../controllers/categoriasControllers.js')

server.post('/categorias', categoriasControllers.store)

