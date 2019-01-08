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
const Route = use('Route')

Route.on('/').render('welcome')
/*
Route.get('/posts', ({ request}) => {
  console.log(request.get());
})
*/
// Route.get('/posts', ({ request}) => request.all())
//Route.get('/posts', ({ request}) => request.only(['title','content']))
//Route.get('/posts', ({ request}) => request.except(['title','content']))
//Route.get('/posts', ({ request}) => request.input('status'))
//Route.post('/posts', ({ request}) => request.collect(['title','content']))
//Route.get('/posts', ({ request}) => request.headers('adonis-session-values'))
/*
const delay = (data,time) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(data)
    },time)
  })
}
Route.get('/posts',async ({ repsonse }) => {
  const data = await delay('list of post',3000)
  return data
})
*/
Route.get('/list-of-posts',({ response }) => {
  //response.redirect('/posts',true,301)
  response.route('list-of-posts')
})
Route.get('/list-of-food-posts',({ response }) => {
  response.route('list-of-posts',{ category :'food'})
})
Route.get('/posts/:category?',({ params })=>{
  return `List of ${ params.category || 'default'} Posts`
})
.as('list-of-posts')
