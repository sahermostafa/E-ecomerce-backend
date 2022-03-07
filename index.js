const express = require('express');
const app = express();
require('express-async-errors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CART',(err) => {
    if(err){
        console.log(err)
    }else {
        console.log('success...')
    }
})


app.use(express.json());

require('./routes')(app);


//app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));

app.use(require('./middlewares/error'));

app.listen(5000, () => {
    console.log('server running');
})