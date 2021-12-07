var express = require('express');
var router = express.Router();
var countries = require('../services/country');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await countries.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting countries `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await countries.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting countries`, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await countries.delete1(req.body));
    }catch (err) {
      console.error(`Error while countries`, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await countries.update1(req.body));
    }catch (err) {
      console.error(`Error while updating countries`, err.message);
      next(err);
    }
});
module.exports = router;
