process.stdin.resume(); //so the program will not close instantly

exports.exit = function exitHandler(options, err) {
    if (options.cleanup) console.log('Duduk!');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', module.exports.exit.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', module.exports.exit.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', module.exports.exit.bind(null, {exit:true}));

module.exports = process;
