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
// Route.get('/posts', async () => {
//   return await Database.table('posts').select('*')
// })
// 以下路由可定义为资源路径处理
Route.resource('posts','PostController')
     .except(['index'])
     .only(['index','show'])
     .apiOnly() //去除创建，编辑资源的路由
// 命名路由
/* Route.get('/users', () => 'List of users')
      .as('users.index')
*/
/*
Route.get('/users', ({ request }) => {
    switch (request.format()) {
      case 'json':
        return [
          {name:'michael'},
          {name:'Cathy'}
        ]
      default:
       return `
        -michael
        -cathy
       `

    }
})
.formats(['json'])
*/
Route.group(() => {
  Route.get('users',()=>'Manage users')
  Route.get('posts',()=>'Manage posts')
})
.prefix('admin')

Route.any('*',({ view }) => view.render('welcome') )
/*
Route.get('/posts','PostController.index')

Route.post('/posts', 'PostController.store')

Route.get('/posts/create', 'PostController.create')

Route.get('/posts/:id', 'PostController.show')

Route.patch('/posts/:id', 'PostController.update')

Route.delete('/posts/:id', 'PostController.destory')

Route.get('/posts/:id/edit', 'PostController.edit')
*/
