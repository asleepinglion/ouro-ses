"use strict";

var SuperJS = require('superjs');
var SES = require('node-ses');

module.exports = SuperJS.Class.extend({

  _metaFile : function() {
    this._super();
    this._loadMeta(__filename);
  },

  init: function(app, config) {

    this._super.apply(this, arguments);

    //instantiate ses client
    this.client = SES.createClient(config);

  },

  send: function(resolve, reject, options) {

    //send email message
    this.client.sendemail(options, function(err, data){

      if( err ) {
        reject(new SuperJS.Error('email_error', 'An error occurred sending email via SES.', err));
      } else {
        resolve(data);
      }
    });
  }

});
