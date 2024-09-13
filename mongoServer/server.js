const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rxayb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let movesCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB!");

    const database = client.db("bjj");
    movesCollection = database.collection("moves");
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
}

// Connect to the database
connectToDatabase();

app.post("/addMove", async (req, res) => {
  const { name, id, fightStyle, type, position } = req.body;
  const newMove = { name, id, fightStyle, type, position };
  try {
    const result = await movesCollection.insertOne(newMove);
    res.status(201).send("Move added successfully");
  } catch (error) {
    console.error("Error adding move:", error);
    res.status(400).send("Error adding move: " + error.message);
  }
});

app.get("/getMoves", async (req, res) => {
  try {
    const moves = await movesCollection.find({}).toArray();
    res.json(moves);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
