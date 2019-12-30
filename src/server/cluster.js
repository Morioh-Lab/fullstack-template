"use strict";
var cluster = require('cluster'),
    os = require('os'),
    _ = require('mix-dash');


module.exports = (id, a, b) => {

    
    if (cluster.isMaster) {
        
        if (_.isFunction(b)) {
            a.apply();
        }

        console.log('Starting [%s] cluster with pid: %s', id, process.pid);
        //ensure workers exit cleanly 
        process.on('SIGINT', function () {
            console.log('Cluster shutting down...');
            for (var id in cluster.workers) {
                cluster.workers[id].kill();
            }
            // exit the master process
            process.exit(0);
        });

        process.on("unhandledRejection", err => {
            console.log(err);
            process.exit(0);
        });

        // Count the machine's CPUs
        var numWorkers = os.cpus().length;

        console.log('Master cluster setting up %s workers...', numWorkers);

        for (var i = 0; i < numWorkers; i++) {
            cluster.fork();
        }      

        cluster.on('online', function (worker) {
            console.log('Worker %s is online', worker.process.pid);
        });

        cluster.on('exit', function (worker, code, signal) {
            console.log('Worker %s died with code: %s, and signal: %s', worker.process.pid, code, signal);
            console.log('Starting a new worker');
            cluster.fork();
        });
    } else {

        var callback = _.isFunction(b) ? b : a;
        callback.apply();
    }
}