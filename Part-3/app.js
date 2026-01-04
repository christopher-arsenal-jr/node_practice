const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');


app.use(express.json());
app.use(morgan('dev'));





app.use('/tours',tourRouter);
app.use('/users',userRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
