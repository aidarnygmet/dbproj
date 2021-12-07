var express = require('express');
var router = express.Router();
var disease_type = require('../services/disease-type');
var app = express();
var cors = require('cors');
app.use(cors())
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await disease_type.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting disease type `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await disease_type.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting disease type `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await disease_type.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting disease type `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await disease_type.update1(req.body));
    }catch (err) {
      console.error(`Error while updating disease type `, err.message);
      next(err);
    }
});
module.exports = router;
