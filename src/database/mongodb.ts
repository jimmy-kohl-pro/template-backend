import mongoose from 'mongoose';

// Replace "uri" with the connection string for your MongoDB database
const uri = `mongodb://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS as string)}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
const dbname = process.env.DB_NAME as string;
console.log(uri);
console.log(dbname);
mongoose.connect(uri, {
    dbName: dbname
});

export const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});