const handler = async (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;

    const validEmail = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if (validEmail?.length > 0) {
      res.status(201).json({ message: 'Success!', email: email });
    } else {
      res.status(422).json({ message: 'Error! Invalid email' });
    }
  }
};
export default handler;
