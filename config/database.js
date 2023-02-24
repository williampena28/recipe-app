const mongoose = require('mongoose')
let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.i58imot.mongodb.net/MealProject?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () =>
{
    console.log('Connected to mongo!');
})