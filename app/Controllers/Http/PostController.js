'use strict'

class PostController {
  // 请求资源列表
  index () {
    return 'List of Posts.'
  }
  // 创建资源
  store () {
    return `Post has been created`
  }
  // 显示单个资源
  show ({ params }) {
    return `You're watching post ${ params.id }`
  }
  // 更新资源
  update ({ params }) {
    return `Posts ${ params.id} has been updated.`
  }
  // 删除资源请求
  destory ({ params }) {
    return `Posts ${params.id} has been removed.`
  }
  // 创建资源
  create () {
    return `Create post`
  }
  // 根据路由资源id，查询某一个资源，显示在编辑表单上
  edit ({ params }) {
    return `Editing post ${ params.id }`  
  }
}

module.exports = PostController
