var express = require('express');
var router = express.Router();
var disease = require('../services/disease');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await disease.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting disease `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await disease.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting disease `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await disease.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting disease `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await disease.update1(req.body));
    }catch (err) {
      console.error(`Error while updating disease `, err.message);
      next(err);
    }
});
module.exports = router;
