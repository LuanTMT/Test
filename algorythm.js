var async = require('async');

var options = {
    count: -10,
    max: 0
};

async.retry(
    { times: 10, interval: 200 },

    function (cb, results) {
        ++this.count;
        console.log(this.count, results);
        if (this.count > 0) cb(null, this.count);
        else cb(new Error());

    }.bind(options),
    function (err, results) {
        if (err){
            console.log("Error: dont find data");
        }
        console.log( results);
    }
);