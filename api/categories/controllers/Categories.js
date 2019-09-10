'use strict';

/**
 * Categories.js controller
 *
 * @description: A set of functions called "actions" for managing `Categories`.
 */

module.exports = {

  /**
   * Retrieve categories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.categories.search(ctx.query);
    } else {
      return strapi.services.categories.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a categories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.categories.fetch(ctx.params);
  },

  /**
   * Count categories records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.categories.count(ctx.query, populate);
  },

  /**
   * Create a/an categories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.categories.add(ctx.request.body);
  },

  /**
   * Update a/an categories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.categories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an categories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.categories.remove(ctx.params);
  }
};
