// serving static files
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
