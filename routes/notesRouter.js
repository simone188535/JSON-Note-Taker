const router = require('express').Router();
const { readFile } = require('../helper/readDB');

router.get('/', (req, res) => {
    return readFile('./db/db.json').then((data) => res.json(JSON.parse(data))).catch((err) => console.error(err));
  });

  router.post('/', (req, res) => {});


  module.exports = router;