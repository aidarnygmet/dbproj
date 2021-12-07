var express = require('express');
var router = express.Router();
var discover = require('../services/discover');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await discover.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting discover `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await discover.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting discover`, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await discover.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting discover `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await discover.update1(req.body));
    }catch (err) {
      console.error(`Error while updating discover `, err.message);
      next(err);
    }
});
module.exports = router;
