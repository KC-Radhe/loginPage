const express = require('express');
const router = express();

router.set("view engine", "ejs");
router.use(express.static('./public'));

router.get('/', function(req, res){
    res.render('login');
});

router.listen(5000);