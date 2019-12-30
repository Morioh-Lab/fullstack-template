// Invoke 'strict' JavaScript mode
"use strict";

// Set the 'development' environment configuration object
module.exports = {
  www: {
    port: 8080,
    host: 'localhost',
    router: {
      isCaseSensitive: true,
      stripTrailingSlash: true
    },
    //routes: { cors: { origin: ['*'] } }
  },
 
  db: "mongodb://localhost/test",
  secret: "759776f2c5a009079aec1bf3bd0fa844c5df42bca549335214229cfa8d5f5260",  

  cookie: {
    // domain: null,
    path: '/',
    // encoding: 'none',
    isHttpOnly: false,
    isSameSite: false,
    isSecure: false, // never set to false in production
    clearInvalid: true, // remove invalid cookies
    password: 'b937131cef19ec145f463761656f8a2bd4c894f1426f844da5e42bad239660a8' //Use something more secure in production
  }

};
