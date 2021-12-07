
var express = require('express');
var router = express.Router();
var doctor = require('../services/doctor');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await doctor.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting doctor`, err.message);
    next(err);
  }
});
router.post('/',async function(req, res, next){
    try{
      res.json(await doctor.insert(req.body));
    }catch (err) {
      console.error(`Error while inserting doctor type `, err.message);
      next(err);
    }
});
router.delete('/',async function(req, res, next){
    try{
      res.json(await doctor.delete1(req.body));
    }catch (err) {
      console.error(`Error while deleting doctor type `, err.message);
      next(err);
    }
});
router.put('/',async function(req, res, next){
    try{
      res.json(await doctor.update1(req.body));
    }catch (err) {
      console.error(`Error while updating doctor type `, err.message);
      next(err);
    }
});
module.exports = router;
