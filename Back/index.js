import "dotenv/config";
import "./DataBase/conectDb.js";
import express from "express";
import cors from 'cors';

const app = express();

const whitheList = ['http://localhost:8080', '*'];

app.use(cors({
    origin: (origin, callback) => {
        if(whitheList.includes(origin)){
            return callback(null, origin);
        }else{
            return callback('Error cors origin: ' + origin + ' no autorizado')
        }
    }
}))

