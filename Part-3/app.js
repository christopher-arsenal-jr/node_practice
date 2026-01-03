const express = require('express');
const app = express();
const port = 3000;

const getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

app.get('/',getTour);

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
