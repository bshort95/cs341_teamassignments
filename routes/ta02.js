const express = require('express');
const router = express.Router();

const names = ['bob', 'Joe', 'mike'];

router.post('/removeUser', (req, res, next) => {
  const remname = req.body.nonUser;
  var ind = names.indexOf(remname)
  if(ind != -1)
  {
    names.splice(ind,1);
  }
  else
  {
    console.error("that name is not Found on the list");

  }
  res.redirect('/ta02/');

})

router.post('/addUser', (req, res, next) => {
  const tempname = req.body.newUser;
  var ind1 = names.indexOf(tempname);
  if(ind1 == -1){
  names.push(tempname);
  }
  else
  {
    console.error("that name already is on the list");
  }
  res.redirect('/ta02/');

})

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: names,
    path: '/ta02',
    });
});

module.exports = router;