const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

const getTour = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

app.use('/tours',tourRouter);
app.use('/users',userRouter);

const tourRouter = express.Router();
const userRouter = express.Router();


tourRouter.get('/', getAllTours);
tourRouter.get('/:id', getTour);

userRouter.route('/users').get(getAllUsers).post(createUser);
userRouter.route('/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
