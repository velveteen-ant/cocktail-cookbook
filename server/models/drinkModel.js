const { Pool } = require('pg');

const PG_URI = 'postgres://vydfmuxt:O-V3t0X1mqbR_eEK8BzuV--Sr5DVDg1W@castor.db.elephantsql.com/vydfmuxt';

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    },
  };