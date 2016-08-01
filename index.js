/* eslint-env node, amd */
/* eslint no-var: "off" */
/* eslint prefer-template: "off" */
/* eslint object-shorthand: "off" */

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-cli-lodash-extras',

  included: function(target) {
    var app, lodashExtrasPath;

    this._super.included.apply(this, arguments);

    app = target.app || target;
    lodashExtrasPath = 'vendor/lodash-extras';

    app.import(path.join(lodashExtrasPath, 'lodash-extras.min.js'));

  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    var lodashExtras = path.dirname(require.resolve('lodash-extras/dist/client/lodash-extras-w-ember.min'));

    if (vendorTree) trees.push(vendorTree);

    trees.push(new Funnel(lodashExtras, { destDir: 'lodash-extras' }));

    return mergeTrees(trees);

  }


};
