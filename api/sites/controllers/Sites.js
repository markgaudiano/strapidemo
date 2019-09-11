'use strict';

/**
 * Sites.js controller
 *
 * @description: A set of functions called "actions" for managing `Sites`.
 */

module.exports = {

  /**
   * Retrieve sites records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.sites.search(ctx.query);
    } else {
      return strapi.services.sites.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a sites record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sites.fetch(ctx.params);
  },

  /**
   * Count sites records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.sites.count(ctx.query, populate);
  },

  /**
   * Create a/an sites record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sites.add(ctx.request.body);
  },

  /**
   * Update a/an sites record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sites.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sites record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sites.remove(ctx.params);
  }
};
