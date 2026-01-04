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

const getTour = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.status(200).json({
        status:'success',
        data:{}
    });
}



app.get('/',getAllTours);
app.get('/:id',getTour);

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
