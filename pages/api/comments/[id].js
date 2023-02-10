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

  if (req.method === 'POST') {
    const { email, name, comment } = req.body;

    const newComment = {
      id: randomUUID(),
      eventId: eventId,
      email: email,
      name: name,
      comment: comment,
    };

    const filePath = buildPath();

    const data = readComments(filePath);
    data.push(newComment);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({
      message: 'Success!',
      data: newComment,
    });
  } else if (req.method === 'GET') {
    const filePath = buildPath();
    const comments = readComments(filePath);

    console.log('Comments', comments);

    res.status(200).json({ message: 'this works', data: comments });
  }
};

export default handler;
