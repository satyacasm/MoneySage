const express = require('express');
const app = express();
const mongoose=require('mongoose');
app.use(express.json());
const cors=require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require('dotenv').config()
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>console.log("Connected to MongoDB database"))
.catch((err)=>{throw err;})


const port = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
app.use('/api',apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
