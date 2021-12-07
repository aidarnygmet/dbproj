const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM disease"
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function insert(dis){
  const result = await db.query(
      'INSERT INTO disease(disease_code, pathogen, description, id) VALUES ($1, $2, $3, $4) RETURNING *',
      [dis.disc, dis.pat, dis.desc, dis.id]
    );
  let message = 'Error in inserting Disease';

  if (result.length) {
    message = 'Disease inserted successfully';
  }
  return {message};
}
async function delete1(dis){
  if(dis.col=="id"){
    var data="DELETE FROM disease WHERE "+dis.col+" = "+dis.val;
  } else {
  var data="DELETE FROM disease WHERE "+dis.col+" = '"+dis.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting Disease';

  if (result.length) {
    message = 'Disease deleted successfully';
  }

  return {message};
}
async function update1(disType){
  if(disType.col=="id"){
    var data="UPDATE disease SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
  } else {
  var data="UPDATE disease SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+"'"+disType.cval+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating Disease';

  if (result.length) {
    message = 'Disease updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
