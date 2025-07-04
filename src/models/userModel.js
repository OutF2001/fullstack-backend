const db = require('../config/db');

const findByEmail = async email => {
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return rows[0];
};

const createUser = async (email, hash) => {
  const { rows } = await db.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
    [email, hash]
  );
  return rows[0];
};
