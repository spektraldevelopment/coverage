'use strict';

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const path = require('path');

// 1. Create main express intance
const router = express();

// 2. Require utility function for adding middleware
const { applyMiddleware } = require('./utils');

// 3a. Require general middleware
const middleWare = require('./middleware');
// 3b. Require error handling middleware
const errorHandlers = require('./middleware/errorHandlers');

// 4. Require routes
const { router: itemsRoutes } = require('./routes/items/itemsRoutes');
const { router: itemRoutes } = require('./routes/item/itemRoutes');
const { router: userRoutes } = require('./routes/user/userRoutes');

// 5. Require conatants
const { PORT, URL } = require('./utils/constants');

// 6. Apply general middleware
applyMiddleware(middleWare, router);

// 6a. Hook up server to use build files
const publicPath = path.resolve(__dirname, '..', 'build');
router.use('/', express.static(publicPath));

// 7. Utilise routes
router.use('/items', itemsRoutes);
router.use('/item', itemRoutes);
router.use('/user', userRoutes);

router.use('*', (req, res) => { res.sendFile(`${publicPath}/index.html`) });

// 8. Apply error handling middleware (meaningfully last)
applyMiddleware(errorHandlers, router);

// 9. Create a server from express instance
const server = http.createServer(router);

// 10. Start server
server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
  if (process.send) {
    // NOTE: process is being run by pm2
    process.send('ready');
  }
});

mongoose.connect(URL, { 
  useNewUrlParser: true ,
  useCreateIndex: true
})
  .then(async () => {
    console.log(`CONNECTED to server: ${URL}`);
  })
  .catch((err) => {
    console.error(err);
    throw err;
  });
