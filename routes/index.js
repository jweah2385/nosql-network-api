// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   return res.send('Wrong route!');
// });

// module.exports = router;


// const router = require('express').Router();

// const apiRouter = require('./api');

// // Pass the apiRouter router object to the router.use() method.**
// router.use('/api', apiRouter);

// router.use((req, res) => {
//   return res.send('Wrong route!');
// });


const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;

