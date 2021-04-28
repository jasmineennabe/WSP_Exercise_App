
const express = require('express');
const model = require('../models/routines');
const { LoginRequired } = require('./security')

const app = express.Router();

    app
        .get('/myRoutines', LoginRequired, (req, res)=> {
            res.send( model.GetMyRoutines(req.user.handle) );
                   
        })
        .post('/add', (req, res)=> {
            req.body.user_handle = req.user.handle;
            res.send( model.AddRoutine(req.body) );
        })
        // .delete('/:routine_id', (req, res)=> res.send( model.Delete(req.params.routine_id) ) );
        
module.exports = app;