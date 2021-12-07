
var express = require('express');
var router = express.Router();
var ps = require('../services/public-servant');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await ps.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting public servant`, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await ps.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting public servant `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await ps.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting public servant `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await ps.update1(req.body));
    }catch (err) {
      console.error(`Error while updating public servant `, err.message);
      next(err);
    }
});
module.exports = router;
