'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsAddContentColumnSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.text('content','longtext')
    })
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('content')
    })
  }
}

module.exports = PostsAddContentColumnSchema
