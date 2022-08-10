import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
        res.status(422).json({message: 'Invalid Input!'})
      return;
    }

    // Store it in database
    const newMessage = {
        email,
        name,
        message
    }
    let client

    const connectionString = `mongodb+srv://${process.env.mongodb_userName}:${process.env.mongodb_password}@${process.env.mongodb_clustserName}.glilf.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {

      client = await MongoClient.connect(connectionString);
    } catch(error) {
       res.status(500).json({message: error.message , message:  'could not connect to database'});
       return;
    }

    const db = client.db();
    try{

      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;

    } catch (error){
      client.close();
      res.status(500).json({message: 'Storing message failed!'});
      return
    }
    client.close();


    res.status(201).json({
        message: 'Successfully stored message!!!!',
        message: newMessage
    })
  }
}
export default handler;
