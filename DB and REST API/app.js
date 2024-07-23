//import sqlite3, express and body parser
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const url = require('url');

const app = express();
let sql;

//connect to the DB
const db = new sqlite3.Database('./rivers.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

//parse the data to DB as JSON
app.use(cors());
app.use(bodyParser.json());

//post request
app.post('/rivers', (req,res) => {
    try {
        const {ofbaID, town, facname, factype, maintresp, pointX, pointY, googleMap} = req.body;
        console.log(req.body);
        sql = "INSERT INTO Rivers(ofba_id, town, facname, facility_t, maintresp, point_x, point_y, google_map) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        db.run(sql, [ofbaID, town, facname, factype, maintresp, pointX, pointY, googleMap], (err) => {
            if (err) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            console.log("successful POST: ", parseInt(ofbaID), town, facname, factype, maintresp, parseFloat(pointX), parseFloat(pointY), googleMap);
        })
        return res.json({
            status: 200, 
            success: true,
        })
    } catch (error) {
        return res.json({
            status: 400, 
            success: false,
        })
    }
});

//get request (field and type)
app.get('/rivers', (req,res) => {
    sql = "SELECT * FROM Rivers"
    try {
        const queryObj = url.parse(req.url, true).query;
        if (queryObj.field && queryObj.type)
            sql +=  ` WHERE ${queryObj.field} LIKE '%${queryObj.type}%'`
        console.log("Attempting to GET");
        db.all(sql, [], (err,rows) => {
            if (err) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            if (rows.length < 1) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            return res.json({
                status: 200,
                success: true,
                data: rows
            })
        })
    } catch (error) {
        return res.json({
            status: 400, 
            success: false,
        })
    }
});

//get request (by row ID)
app.get('/rivers/:id', (req,res) => {
    sql = "SELECT * FROM Rivers"
    try {
        const {id} = req.params;
        sql +=  ` WHERE rowid = ${id}`
        console.log(sql);
        db.all(sql, [], (err,rows) => {
            if (err) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            if (rows.length < 1) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            return res.json({
                status: 200,
                success: true,
                data: rows
            })
        })
    } catch (error) {
        return res.json({
            status: 400, 
            success: false,
        })
    }
});

//listen to port 3000
app.listen(3000);