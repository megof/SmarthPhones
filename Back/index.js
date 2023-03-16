import "dotenv/config";
import "./DataBase/conectDb.js";
import express from "express";
import MarkRouter from "./Routes/MarkRoute.js";
import RefRouter from "./Routes/RefRoute.js";
import EmployeeRouter from "./Routes/EmployeeRoute.js";
import PhoneRouter from "./Routes/PhoneRoute.js";
import WorkRouter from "./Routes/WorkRoute.js";
import cors from 'cors';

const app = express();
const whiteList = ['http://localhost:8080', '*'];

app.use(cors({
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
            return callback(null, origin);
        } else {
            return callback("error cors origin: " + origin + " no autorizado");
        }
    }
}))

app.use(express.json());

app.use('/api/v1/mark', MarkRouter);
app.use('/api/v1/ref', RefRouter);
app.use('/api/v1/employee', EmployeeRouter);
app.use('/api/v1/phone', PhoneRouter);
app.use('/api/v1/work', WorkRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT));
