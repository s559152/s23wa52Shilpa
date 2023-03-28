var express = require('express');
var router = express.Router();
var math = require('mathjs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("computation working");
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)
const id="S559152";
const lastDigit = id.split("").pop();
console.log(lastDigit);
const x = req.query.x || randomNumber;
let result;
switch(lastDigit){
  case '2': result =`
  Math.pow() applied to ${x} is ${Math.pow(x,x)}
  Math.sign() applied to ${x} is ${Math.sign(x)}
  Math.tanh() applied to ${x} is ${Math.tanh(x)}
  Math.trunc() applied to ${x} is ${Math.trunc(x)}`;
  break;
  case '6': result =`
  Math.atan() applied to ${x} is ${Math.atan(x)}
  Math.exp() applied to ${x} is ${Math.exp(x)}
  Math.expm1() applied to ${x} is ${Math.expm1(x)}`;
  break;
}


  res.render('computation', { result});
});

module.exports = router;
