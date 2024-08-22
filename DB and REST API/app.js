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

//post request to Rivers
app.post('/rivers', (req,res) => {
    try {
        const {name, address, link, image} = req.body;
        console.log(req.body);
        sql = "INSERT INTO Rivers(id, name, address, link, image) VALUES (null, ?, ?, ?, ?)"
        db.run(sql, [name, address, link, image], (err) => {
            if (err) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            console.log("successful POST: ", name, address, link, image);
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

//get request to Rivers (field and type)
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

//get request to Rivers (by row ID)
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


//post request to Activities
app.post('/rivers/:river_id/activities', (req,res) => {
    try {
        const {activity, name, town, desc, address, wc_entrance, wc_parking, pets, google_map, link, image, note} = req.body;
        const {river_id} = req.params;
        console.log(req.body);
        sql = "INSERT INTO Activities(id, river_id, activity, name, town, desc, address, wc_entrance, wc_parking, pets, google_map, link, image, note)"
            + " VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.run(sql, [river_id, activity, name, town, desc, address, wc_entrance, wc_parking, pets, google_map, link, image, note], (err) => {
            if (err) return res.json({
                status: 300, 
                success: false,
                error: err
            })
            console.log("successful POST: ", river_id, activity, name, town, desc, address, wc_entrance, wc_parking, pets, google_map, link, image, note);
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

//get request to Activities (field and type)
app.get('/rivers/:river_id/activities', (req,res) => {
    sql = "SELECT * FROM Activities"
    try {
        const queryObj = url.parse(req.url, true).query;
        const {river_id} = req.params;
        sql +=  ` WHERE river_id = ${river_id}`
        if (queryObj.field && queryObj.type)
            sql +=  ` AND WHERE ${queryObj.field} LIKE '%${queryObj.type}%'`
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

//get request to Activities (by row ID)n
app.get('/rivers/:river_id/activities/:id', (req,res) => {
    sql = "SELECT * FROM Activities"
    try {
        const {river_id, id} = req.params;
        sql +=  ` WHERE river_id = ${river_id} AND rowid = ${id}`
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

//get request to Activities (by activity type)
app.get('/rivers/:river_id/:type', (req,res) => {
    sql = "SELECT * FROM Activities"
    try {
        const {river_id, type} = req.params;
        sql +=  ` WHERE river_id = ${river_id} AND activity = ${type}`
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

//get request to all Activities (field and type)
app.get('/activities', (req,res) => {
    sql = "SELECT Activities.*, Rivers.name AS river_name FROM Activities LEFT JOIN Rivers ON Rivers.id = Activities.river_id"
    try {
        const queryObj = url.parse(req.url, true).query;

        if (queryObj.field && queryObj.type)
            sql +=  ` AND WHERE ${queryObj.field} LIKE '%${queryObj.type}%'`
        console.log("Attempting to GET All Activities");
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