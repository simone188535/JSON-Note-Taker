const router = require('express').Router();

router.get('/', (req, res) => {
    // console.info(`${req.method} request received for feedback`);
  
    // readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
  });

  router.post('/', (req, res) => {});


  module.exports = router;