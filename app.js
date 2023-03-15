import express from "express"
import cookieParser from "cookie-parser";


const app = express();
const port = 3000;

app.use(cookieParser());  

app.get('/login', (req, res) => {
  res.cookie('name', 'John Doe');
  res.send('Cookie created');
});

app.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Hello World...');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
