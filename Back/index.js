import "dotenv/config";
import "./DataBase/conectDb.js";
import express from "express";
import MarkRouter from "./Routes/MarkRoute.js"
import RefRouter from "./Routes/RefRoute.js";
import EmployeeRouter from "./Routes/EmployeeRoute.js"

const app = express();



app.use(express.json());

app.use('/api/v1/mark', MarkRouter);
app.use('/api/v1/ref', RefRouter);
app.use('/api/v1/employee', EmployeeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("😎😎😉 http://localhost:" + PORT));
