'use strict'
const Database = use('Database')
const Post = use('App/Models/Post')
const User = use('App/Models/User')
const Tag = use('App/Models/Tag')

class PostController {
 async index ({ view }) {
   const posts = await Post.all()
   return view.render('post.index', {posts: posts.toJSON()})
 }
 async store ({ request, response }) {
    const newPost = request.only(['title', 'content'])
    const postID = await Database.insert(newPost).into('posts')
    console.log('postID',postID)
    //const post = await Post.create(newPost)
    return response.redirect(`/posts/${ postID }`)
  }
 async create ({ view }) {
    // const users = await User.all()
    //const tags = await Tag.all()
    // return view.render('post.create', { users: users.toJSON()})
    return view.render('post.create')
  }

  async show ({ view, params }) {
    const post = await Database
      .from('posts')
      .where('id', params.id)
      .first()

    // const post = await Post.findOrFail(params.id)
    //
    // const tags = await post
    //   .tags()
    //   .select('id', 'title')
    //   .fetch()

    //return view.render('post.show', { post, tags: tags.toJSON() })
    return view.render('post.show', { post })
  }

  async edit ({ view, params }) {
    const post = await Database
      .from('posts')
      .where('id', params.id)
      .first()

    //const post = await Post.findOrFail(params.id)

    return view.render('post.edit', { post })
  }

  async update ({ request, params }) {
   const updatedPost = request.only(['title', 'content'])
   await Database
     .table('posts')
     .where('id', params.id)
     .update(updatedPost)

   // const post = await Post.findOrFail(params.id)
   // post.merge(updatedPost)
   // post.save()
 }

 async destroy ({ request, params }) {
    await Database
      .table('posts')
      .where('id', params.id)
      .delete()

    // const post = await Post.find(params.id)
    // post.delete()

    return 'success'
  }

}

module.exports = PostController
