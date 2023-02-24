import { MongoClient } from 'mongodb';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
const buildPath = () => path.join(process.cwd(), 'data', 'comments.json');

const readComments = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const handler = async (req, res) => {
  const eventId = req.query.id;

  const client = await MongoClient.connect(
    'mongodb+srv://jennielipponen:lLlUdK7cDrtRAtyc@cluster0.unogaff.mongodb.net/events?retryWrites=true&w=majority'
  );

  const db = client.db();

  if (req.method === 'POST') {
    const { name, comment } = req.body;

    const email = req.body.email;

    const validEmail = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if (validEmail) {
      const newComment = {
        eventId: eventId,
        email: email,
        name: name,
        comment: comment,
      };

      // WRITES DATA TO FILE
      // const filePath = buildPath();

      // const data = readComments(filePath);
      // data.push(newComment);

      //fs.writeFileSync(filePath, JSON.stringify(data));
      const result = await db.collection('comments').insertOne(newComment);

      console.log('after writung to DB', result.insertedId);

      newComment.id = result.insertedId;

      res.status(201).json({
        message: 'Success!',
        data: newComment,
      });
    }
  } else if (req.method === 'GET') {
    // const filePath = buildPath();
    // const comments = readComments(filePath);
    const comments = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    console.log('Comments', comments);

    res.status(200).json({ message: 'this works', data: comments });
  }

  client.close();
};

export default handler;
