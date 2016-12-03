'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello world!')
    }
  },
  {
    method: 'GET',
    path: '/hello/{user}',
    handler: (request, reply) => {
      reply('Hello ' + encodeURIComponent(request.params.user) + '!')
    }
  }
]
