const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT * FROM discover"
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function insert(discover){
  const result = await db.query(
      'INSERT INTO discover(cname, disease_code, first_enc_date) VALUES ($1, $2, $3) RETURNING *',
      [discover.cname, discover.disC, discover.fed]
    );
  let message = 'Error in inserting Discover';

  if (result.length) {
    message = 'Discover inserted successfully';
  }
  return {message};
}
async function delete1(discover){
  var data="DELETE FROM discover WHERE "+discover.col+" = '"+discover.val+"'";
  const result = await db.query(data);
  let message = 'Error in deleting Discover';

  if (result.length) {
    message = 'Discover deleted successfully';
  }

  return {message};
}
async function update1(discover){
    console.log(discover.col, discover.val, discover.cond, discover.cval);
  var data="UPDATE discover SET "+discover.col+" = "+"'"+discover.val+"'"+" WHERE "+discover.cond+" = "+"'"+discover.cval+"'";
  const result = await db.query(data);
  let message = 'Error in updating Discover';

  if (result.length) {
    message = 'Discover updated successfully';
  }

  return {message};
}
module.exports = {
  getMultiple,
  insert,
  delete1,
  update1
}
