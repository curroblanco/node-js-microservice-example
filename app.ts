import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const DB_URL = "mongodb://root:root@127.0.0.1:27017/movies?authSource=admin&authMechanism=SCRAM-SHA-1";
require('./models/Movie');
require('./models/Actor');

mongoose.connect(DB_URL);
mongoose.connection;

const app = express();
app.use(bodyParser.json({ type: 'application/json' }))

const movieRoutes = require('./routes/MovieRouter')
const actorRoutes = require('./routes/ActorRouter')

app.use(movieRoutes);
app.use(actorRoutes);

let port = 8090;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});