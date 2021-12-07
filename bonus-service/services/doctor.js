const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM doctor"
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
      'INSERT INTO doctor(email, degree) VALUES ($1, $2) RETURNING *',
      [disType.id, disType.desc]
    );
  let message = 'Error in inserting Doctor Type';

  if (result.length) {
    message = 'Doctor inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  var data="DELETE FROM doctor WHERE "+disType.col+" = '"+disType.val+"'";
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting Doctor';

  if (result.length) {
    message = 'Doctor deleted successfully';
  }

  return {message};
}
async function update1(disType){
  var data="UPDATE doctor SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+"'"+disType.cval+"'";
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating Doctor';

  if (result.length) {
    message = 'Doctor updated successfully';
  }

  return {message};
}
module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
