import mongoose from 'mongoose';

const { MONGODB_CONNECTION_URI } = process.env;

mongoose.connect(MONGODB_CONNECTION_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log(`Mongoose connected to mongodb server`);
});