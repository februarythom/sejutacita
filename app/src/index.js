require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const keys = require('./keys').default;
// const User = require('./models/user.model');
const user_controller = require('./controllers/user.controller');

console.log(keys)
mongoose.connect(
    keys.DB_CONN_STRING,
    () => user_controller.SetDefaultAdmin()
    // () => {
    //     console.log('mongodb connected')
    //     const user = new User({
    //         username: 'admin',
    //         password: 'admin',
    //         role: 'admin'
    //     });

    //     user.save();

    // }
);

// middileware
app.use(express.json());

// routes
const auth_routes = require('./routes/auth.route');
const user_routes = require('./routes/user.route');

app.use('/v1/auth', auth_routes);
app.use('/v1/user', user_routes);



app.listen(3000, () => console.log('server is running..'));
