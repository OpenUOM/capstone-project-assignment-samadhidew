const sqlite3 = require('sqlite3').verbose();const db = new sqlite3.Database('student_database.db')
let _DBConnection;

const connectDatabase = async () => {

  if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "test-backend") {
      return new sqlite3.Database(":memory:", sqlite3.OPEN_READWRITE);
  } else {
    return new sqlite3.Database('./db.sqlite', sqlite3.OPEN_READWRITE);
  }
}

const getDbConnection = async () => {
  if (!_DBConnection) {
    _DBConnection = await connectDatabase();
  }
  return _DBConnection;
};

const closeConnection = conn => {
  if (conn) {
    return conn.close();
  }
};



module.exports = {
  getDbConnection,
  closeConnection
};

