const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM specialize"
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
      'INSERT INTO specialize(id, email) VALUES ($1, $2) RETURNING *',
      [disType.id, disType.desc]
    );
  let message = 'Error in inserting Specialize';

  if (result.length) {
    message = 'Specialize inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  if(disType.col=="id"){
    var data="DELETE FROM specialize WHERE "+disType.col+" = "+disType.val;
  } else {
  var data="DELETE FROM specialize WHERE "+disType.col+" = '"+disType.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting specialize';

  if (result.length) {
    message = 'Specialize deleted successfully';
  }

  return {message};
}
async function update1(disType){
  if(disType.col=="id"){
    var data="UPDATE specialize SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
  } else {
  var data="UPDATE specialize SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+disType.cval;}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating Specialize';

  if (result.length) {
    message = 'Specialize updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
