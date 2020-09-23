import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import database_connection_url from "./keys/url.js";
import countries from "./models/models.js";
// variables
const host = "localhost" || "127.0.0.1";
const port = process.env.PORT || 3001;
const app = express();
const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};
// midleways
app.use(express.json());
app.use(cors());

// database Logic

mongoose.connect(database_connection_url, options);

const database = mongoose.connection;
database.once("open", () => {
  console.log("The cloud database is connected (MongoDB)");
});

// routes

app.get("/", (req, res) => res.status(200).send("The api is working"));
// getting all countries infomation

app.get("/v1/countries/", (req, res) => {
  // database logic
  countries.find({}, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});
// getting infomation for a specific country
app.get("/v1/countries/country_name/:countryName", (req, res) => {
  // databae logic
  const { countryName } = req.params;

  countries.find({ cioc: countryName }, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      if (data.length === 0) {
        res.send(countryName);
        return;
      }
      res.status(200).send(data);
    }
  });
});

// posting all countries
app.post("/v1/post/countries", (req, res) => {
  const countries_data = req.body;
  countries.create(countries_data, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });

  // database logic
});

// starter
app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`THE SERVER IS RUNNING ON PORT: ${port}`);
  console.log(`On local machine visit: http://${host}:${port}`);
});
