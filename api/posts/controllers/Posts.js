'use strict';

/**
 * Posts.js controller
 *
 * @description: A set of functions called "actions" for managing `Posts`.
 */

module.exports = {

  /**
   * Retrieve posts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.posts.search(ctx.query);
    } else {
      return strapi.services.posts.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a posts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.posts.fetch(ctx.params);
  },

  /**
   * Count posts records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.posts.count(ctx.query, populate);
  },

  /**
   * Create a/an posts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.posts.add(ctx.request.body);
  },

  /**
   * Update a/an posts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.posts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an posts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.posts.remove(ctx.params);
  }
};
