var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect(`mongodb+srv://cknguyenmanh:WaPjZ3dEYIcXzFFb@cluster0.coj0a6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//SCHEMA
let lopSchema = mongoose.Schema({
  name: {
    type: String,
  },
  numberStudent: {
    type: String,
  }
});

//MODEL
let Lop = mongoose.model('Lop', lopSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  Lop.find({}, (error, data) => {
    console.log('danh sách lớp', data);
    // res.render('index', {lops: data});
  })
  // res.render('index', { title: 'le hông phuong' });
});

module.exports = router;
