const { connect } = require("mongoose");

const connectDB = async () => {
  const db = await connect(process.env.MONGO_DB_URI);
  console.log(db.connection);
  console.log(
    `MongoDB are connecter: db-name: ${db.connection.name}, port: ${db.connection.port}, host: ${db.connection.host}`
      .yellow
  );
};

module.exports = connectDB;
