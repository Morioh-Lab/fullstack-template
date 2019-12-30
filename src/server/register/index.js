// Invoke 'strict' JavaScript mode
"use strict";
// Load the module dependencies

var Mustache = require('mustache'),
    Member = require('../model/member'),
    config = require("../config");

module.exports = async (server, options) => {
    await server.register([
        { plugin: require("@hapi/inert") },
        { plugin: require('@hapi/vision') },
        { plugin: require("@hapi/crumb"), options: { restful: true, cookieOptions: config.cookie } },
        { plugin: require("@hapi/yar"), options: { cookieOptions: config.cookie } },        
        { plugin: require("hapi-bodyparser") },
        { plugin: require("hapi-auth-jwt2") },
    ]);

    server.auth.strategy('jwt', 'jwt', {
        key: config.cookie.password,
        validate: async (decoded, request, h) => {

            var info = await Member.findOne({ _id: decoded._id, stt: 1 }).cache(decoded._id, 30 * 60);
            return info ? { isValid: true } : { isValid: false };
        },
        verifyOptions: { algorithms: ['HS256'] }


    });




    server.views({
        engines: {
            html: {
                compile: (template) => {
                    Mustache.parse(template);
                    return (context) => {                        
                        return Mustache.render(template, context);
                    };
                }
            }
        },
        // relativeTo: __dirname,
        path: './views/'
    });

   
    server.auth.default('jwt');    

}
