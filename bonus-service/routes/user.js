var express = require('express');
var router = express.Router();
var user = require('../services/user');
var app = express();
var cors = require('cors');
app.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await user.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await user.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting user `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await user.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting user `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await user.update1(req.body));
    }catch (err) {
      console.error(`Error while updating user `, err.message);
      next(err);
    }
});
module.exports = router;
