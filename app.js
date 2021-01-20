'use strict';

const db = require ('./db')
const express = require('express'),
    app = express(),
    //validate = require('express-jsonschema').validate,
    bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/ping',
    (req, res) => {
        db.queryAction('select * from profiles;')
        res.status(200).send('pong');
    });


app.use('/', require('./routes'));

_useErrorMiddlewares();

app.listen(process.env.PORT || 4000, function(){
    console.log('app is running');
});

function _useErrorMiddlewares() {
    app.use((err, req, res, next) => {
        // request aborted handler
        if (err.status === 400 && err.code === 'ECONNABORTED') {
            return res.status(err.status).json({
                error: err
            });
        }

        if (err.name !== 'JsonSchemaValidation') {
            return next(err);
        }

        res.status(400).json({
            statusText: 'Bad Request',
            jsonSchemaValidation: true,
            errors: err.validations  // All the validation information
        });
    });

}

