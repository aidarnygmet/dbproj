const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM diseasetype"
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function insert(disType){
  const result = await db.query(
      'INSERT INTO diseasetype(id, description) VALUES ($1, $2) RETURNING *',
      [disType.id, disType.desc]
    );
  let message = 'Error in inserting Disease Type';

  if (result.length) {
    message = 'Disease Type inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  if(disType.col=="id"){
    var data="DELETE FROM diseasetype WHERE "+disType.col+" = "+disType.val;
  } else {
  var data="DELETE FROM diseasetype WHERE "+disType.col+" = '"+disType.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting Disease Type';

  if (result.length) {
    message = 'Disease Type deleted successfully';
  }

  return {message};
}
async function update1(disType){
  if(disType.col=="id"){
    var data="UPDATE diseasetype SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
  } else {
  var data="UPDATE diseasetype SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+disType.cval;}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating Disease Type';

  if (result.length) {
    message = 'Disease Type updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
