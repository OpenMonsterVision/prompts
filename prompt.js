const chalk = require('chalk');
const http = require("https")
//var request = require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var options = {
    url: 'https://wttr.in/Nashville',
    headers: {
        'User-Agent': 'curl/7.9.8 (i686-pc-linux-gnu) libcurl 7.9.8 (OpenSSL 0.9.6b) (ipv6 enabled)'
    }
};

function callback(error, response, body) {
    //do somethings
    console.log(body)
}

process.stdout.write("$ ");
//process.stdout.write(('$ \033[0G');
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("you entered: [" + 
        d.toString().trim() + "]");
    switch(d.toString().trim()) {
        case "clear":
            process.stdout.write('\033c');
            process.stdout.write("$ ");
            break;
        case "tearsforfears":
            console.log("pierce")
            process.stdout.write("$ ");
            break;
        case "date":
            console.log(new Date)
            process.stdout.write("$ ");
            break;
        case "weather":
            http.get(options.url, function(res) {
                console.log("statusCode: ", res.statusCode);
                console.log("headers: ", res.headers);

                res.on('data', function(d) {
                    process.stdout.write(d);
                });

            }).on('error', function(e) {
                console.error(e);
            });;
            process.stdout.write("$ ");
            break;
        case "btc":
            url = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';

            http.get(url, function(res){
                var body = '';

                res.on('data', function(chunk){
                    body += chunk;
                });

                res.on('end', function(){
                    var fbResponse = JSON.parse(body);
                    console.log(chalk.yellow(body));
                });
            }).on('error', function(e){
                console.log("Got an error: ", e);
            });

            process.stdout.write("$ ");
            break;
        default:
            process.stdout.write("$ ");
    }

});
