require('dotenv/config'); // commonjs
const { Client } = require('pg'); // commonjs

const configDates = {
host: process.env.DATABASE_HOST,
port: process.env.DATABASE_PORT,
user: process.env.DATABASE_USERNAME,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME,
};

const client = new Client(configDates);

client
.connect()
.then(() => {
console.log('✅ Conexión exitosa a PostgreSQL');
client.end();
})
.catch((err) => {
console.error('❌ Error de conexión:', err.message);
});
