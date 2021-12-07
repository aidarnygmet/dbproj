const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM record"
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
      'INSERT INTO record(email,cname,disease_code, total_death, total_patients) VALUES ($1, $2, $3,$4,$5) RETURNING *',
      [disType.email, disType.cname, disType.disc, disType.td, disType.tp]
    );
  let message = 'Error in inserting record';

  if (result.length) {
    message = 'record inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  if(disType.col=="total_death" || disType.col=="total_patients"){
    var data="DELETE FROM record WHERE "+disType.col+" = "+disType.val;
  } else {
  var data="DELETE FROM record WHERE "+disType.col+" = '"+disType.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting record';

  if (result.length) {
    message = 'record deleted successfully';
  }

  return {message};
}
async function update1(disType){
  if(disType.col=="total_death" || disType.col=="total_patients"){
    var data="UPDATE record SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
  } else {
  var data="UPDATE record SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+"'"+disType.cval+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating record';

  if (result.length) {
    message = 'record updated successfully';
  }

  return {message};
}
module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
