'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Database = use('Database') //添加use
const Route = use('Route')

Route.on('/').render('welcome')
// Route.get('/hello', ({ request })=> {
//    return `hello ${ request.input('name')}`
// })
Route.get('/hello','HelloController.render')

// 查询数据表posts
Route.get('/posts', async () => {
  return await Database.table('posts').select('*')
})

Route.post('/posts', () => 'posts has been created...')

Route.get('/posts/:id', ({ params}) => {
  return `You're watching ${ params.id} Posts.`
})

Route.patch('/posts/:id', ({ params }) => {
  return `Posts ${ params.id} has been updated.`
})

Route.delete('/posts/:id', ({ params }) => {
  return `Posts ${params.id} has been removed.`
})
