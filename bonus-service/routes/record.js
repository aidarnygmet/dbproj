var express = require('express');
var router = express.Router();
var record = require('../services/record');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await record.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting record `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await record.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting record `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await record.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting record`, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await record.update1(req.body));
    }catch (err) {
      console.error(`Error while updating record `, err.message);
      next(err);
    }
});
module.exports = router;
