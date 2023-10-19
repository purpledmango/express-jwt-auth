import mongoose from "mongoose";

const connectToDB = (URI) => {
    try {
        mongoose.connect(URI);
        const db = mongoose.connection;
        db.once('open', () => {
            console.log('DB: UP');
        });
        db.on('error', (error) => {
            console.error(`Error while connecting to DB: ${error}`);
            console.log('DB: DOWN');
        });
    } catch (err) {
        console.error(`Not connected to DB ERROR ->: ${err}`);
        console.log('DB: DOWN');
    }
}

export default connectToDB;
