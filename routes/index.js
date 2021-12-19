const path = require('path');
const router = require('express').Router();
const notesRouter = require('./notesRouter');

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// notes api routes
router.use('/api/notes', notesRouter);

// GET Route for homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;