// call modules
require('./system/system.modules');

// template engine
app.set('view engine', 'ejs');

// serving static files
app.use(express.static('public'));

// set port
app.listen(process.env.PORT || config.port);
console.log("Listening to port " + (process.env.PORT || config.port));
