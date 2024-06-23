var express = require('express');
var router = express.Router();
var path = require('path')
const app = express();

app.use(express.static(path.resolve("C:/Code/smart-home-solutions/smart-home-solutions/client/build/index.html")));

/* GET home page. */
// router.get('/*', function (req, res) {
//   res.json({index: "test"})
// });

module.exports = router;
