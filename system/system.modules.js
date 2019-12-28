// nodejs modules
global.express  = require('express');
global.router   = express.Router();
global.app      = express();
global.fs       = require('fs');
global.path     = require('path');

// set globals
global.config   = require('../config');
global.database = require('./utils/utils.database');
global.controller = require('./system.controllers');
global.routes   = require('./system.routes');
