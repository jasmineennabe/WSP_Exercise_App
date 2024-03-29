

const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { LoginRequired  } = require('./controllers/security');
const usersModel = require('./models/users');
const usersCtrl = require('./controllers/users');
const postsCtrl = require('./controllers/posts');
const routinesCtrl = require('./controllers/routines');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./docs'))
    .use(cors())

    .use( async (req, res, next)=>{ 
      const token = req.headers.authorization?.split(' ')[1];
      req.user = token && await usersModel.FromJWT(token);
      next();
    }) 

    .use('/users', usersCtrl)
    .use('/posts', LoginRequired, postsCtrl)
    .use('/routines', routinesCtrl)

        // last item
    .get('*', (req, res) => {
      res.sendFile( path.join(__dirname, '../docs/index.html' ) );
    })

    .use((error, req, res, next)=>{
        console.error(error);

        res.status(error.code || 500 );
        res.send( { msg: error.msg });
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})