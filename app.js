const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {});
});

app.get('/user-home', (req, res) => {
  res.render('user_home', {});
});

app.get('/request-meeting', (req, res) => {
  res.render('request_meeting', {});
});

app.listen(3000, () => {
  console.log("Tellem running in port 3000");
});
