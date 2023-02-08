// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://alejandrodewolf:alejandro12345@cluster0.xgqbm.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });

    // we can use try catch to handle errors
  }
}

export default handler;
