var express = require('express');
var router = express.Router();
var spec = require('../services/specialize');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await spec.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting specialize`, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await spec.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting specialize `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await spec.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting specialize`, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await spec.update1(req.body));
    }catch (err) {
      console.error(`Error while updating specialize `, err.message);
      next(err);
    }
});
module.exports = router;
