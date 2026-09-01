import express from 'express';

const app = express();

app.get('/', (reg, res) => {
  res.send('Hello Andrew!!!');
});

app.listen(3000, () => {
  console.log('Server OK!!!');
});
