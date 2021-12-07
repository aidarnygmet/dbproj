const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM user1"
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
      'INSERT INTO user1(email, name, surname, salary, phone, cname) VALUES ($1, $2, $3,$4,$5,$6) RETURNING *',
      [disType.id, disType.desc, disType.sur, disType.sal, disType.ph, disType.cname]
    );
  let message = 'Error in inserting user';

  if (result.length) {
    message = 'user inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  if(disType.col=="salary"){
    var data="DELETE FROM user1 WHERE "+disType.col+" = "+disType.val;
  } else {
  var data="DELETE FROM user1 WHERE "+disType.col+" = '"+disType.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting user';

  if (result.length) {
    message = 'user deleted successfully';
  }

  return {message};
}
async function update1(disType){
  if(disType.col=="salary"){
    var data="UPDATE user1 SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
  } else {
  var data="UPDATE user1 SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+"'"+disType.cval+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in updating user';

  if (result.length) {
    message = 'user updated successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
