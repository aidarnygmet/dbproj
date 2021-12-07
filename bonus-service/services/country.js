const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM country"
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
      'INSERT INTO country(cname, population) VALUES ($1, $2) RETURNING *',
      [disType.desc,disType.id]
    );
  let message = 'Error in inserting Countries';

  if (result.length) {
    message = 'Country inserted successfully';
  }
  return {message};
}
async function delete1(disType){
  console.log(disType.col, disType.val)
  if(disType.col=="population"){
    var data="DELETE FROM country WHERE "+disType.col+" = "+disType.val;
  } else {
  var data="DELETE FROM country WHERE "+disType.col+" = '"+disType.val+"'";}
  console.log(data);
  const result = await db.query(data);
  let message = 'Error in deleting country';

  if (result.length) {
    message = 'Country deleted successfully';
  }
  return {message};
}
async function update1(disType){
    if(disType.col=="population"){
      var data="UPDATE country SET "+disType.col+" = "+disType.val+" WHERE "+disType.cond+" = '"+disType.cval+"'";
    } else {
    var data="UPDATE diseasetype SET "+disType.col+" = "+"'"+disType.val+"'"+" WHERE "+disType.cond+" = "+disType.cval;}
    console.log(data);
    const result = await db.query(data);
    let message = 'Error in updating Country';

    if (result.length) {
      message = 'Country updated successfully';
    }
    return {message};
  }
module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
