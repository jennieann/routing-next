import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;

    const validEmail = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if (validEmail?.length > 0) {
      const client = await MongoClient.connect(
        'mongodb+srv://jennielipponen:lLlUdK7cDrtRAtyc@cluster0.unogaff.mongodb.net/events?retryWrites=true&w=majority'
      );

      const db = client.db();

      await db.collection('newsletter').insertOne({ email: email });

      client.close();

      res.status(201).json({ message: 'Success!', email: email });
    } else {
      res.status(422).json({ message: 'Error! Invalid email' });
    }
  } else {
    res.status(404).json({ message: 'du tjuvkikar!' });
  }
};
export default handler;
