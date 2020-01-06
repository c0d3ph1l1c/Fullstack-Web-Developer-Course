const db = require('../libs/database');

module.exports = async (res, get, post, files) => {
  let {title, price, count} = post;

  if(!title || !price || !count) {
    res.writeJson({error: 1, msg: 'params invalid'});
  } else {
    price = Number(price);
    count = Number(count);

    if(isNaN(price) || isNaN(count)){
      res.writeJson({error: 1, msg: 'params invalid'});
    } else {
      // Beware SQL injection
      // await db.query(`INSERT INTO item_table (title, price, count) VALUES ('${title}', ${price}, ${count})`);
      
      try {
        // SQL prepared statement to prevent injection
        await db.query('INSERT INTO item_table (title, price, count) VALUES (?,?,?)', [title, price, count]);

        res.writeJson({error: 0, msg: 'success'});
      } catch(e) {
        res.writeJson({error: 1, msg: `database error`});
      }

      res.end();
    }
  }
};