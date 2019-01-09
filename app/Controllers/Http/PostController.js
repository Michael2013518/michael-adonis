'use strict'

class PostController {
  index ({ view }) {
    const pageTitle = 'List of posts'
    const user = {
      name: 'michael'
    }
    const entities = [
      {id:1,title:'Lemon',content:'柠檬'},
      {id:2,title:'Watermelon',content:'柠檬2'}
    ]
    return view.render('Posts.index',{ pageTitle, user , entities })
  }
}

module.exports = PostController
