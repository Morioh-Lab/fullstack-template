"use strict";

var Hapi = require("@hapi/hapi"),
    config = require("./config"),
    mongoose = require("mongoose");


require('./cluster')('app', () => {

    (async () => {

        var server = Hapi.server(config.www);

        await require("./register")(server);

        server.route([].concat(
            require('./router/all'),
            require('./router/member'),
            require('./router/app')
        ));



        await server.start();

        global.db = mongoose.connect(config.db, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

        console.log("Worker %s started and running at: %s", process.pid, server.info.uri);


    })();

});