


const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { LoginRequired  } = require('./controllers/security');
const usersModel = require('./models/users');
const usersCtrl = require('./controllers/users');
const postsCtrl = require('./controllers/posts');


const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./docs'))

    .use( async (req, res, next)=>{ 
      const token = req.headers.authorization?.split(' ')[1];
      req.user = token && await usersModel.FromJWT(token);
      next();
    }) 

    .use('/users', usersCtrl)
    .use('/posts', LoginRequired, postsCtrl)


        // last item
    .get('*', (req, res) => {
      res.sendFile( path.join(__dirname, '../docs/index.html' ) );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})