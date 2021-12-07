const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM publicservant"
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
      'INSERT INTO publicservant(email, department) VALUES ($1, $2) RETURNING *',
      [disType.id, disType.desc]
    );
  let message = 'Error in inserting public servant';

  if (result.length) {
    message = 'Public Servant inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  var data="DELETE FROM publicservant WHERE "+disType.col+" = '"+disType.val+"'";
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting Public servant';

  if (result.length) {
    message = 'public servant deleted successfully';
  }

  return {message};
}
async function update1(disType){
  var data="UPDATE publicservant SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+"'"+disType.cval+"'";
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating publicservant';

  if (result.length) {
    message = 'Public Servant updated successfully';
  }

  return {message};
}
module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
