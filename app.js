
var express = require('express');
var cons = require('consolidate');

var app = express();

// assign the dust engine to .dust files
app.engine('dust', cons.dust);

// register dust as the default .render()
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Testing out dust.js server-side rendering',
    age: 31,
    sex: 'male',
    isEnabled: true,
    likesPopcorn: false,
    createdOn: new Date(),
    friends: [
      'bob', 'liza', 'joe', 'margo', 'fran'
    ],
    address: {
      line1: '21 Jump Street',
      line2: 'Suite 33',
      city: 'Pawville'
    }
  });
});

app.listen(3000);