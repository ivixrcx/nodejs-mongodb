var controller = [];
var normalizedPath = path.join(process.cwd(), 'controllers');

fs.readdirSync(normalizedPath).forEach(function(file) {
  var m = require('../controllers/' + file);
  controller[m.name] = m;
});

module.exports = controller;
