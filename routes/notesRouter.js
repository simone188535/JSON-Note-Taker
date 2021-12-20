const router = require("express").Router();
const { readFile, writeFile } = require("../helper/readDB");

router.get("/", (req, res) => {
  return readFile("./db/db.json")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.error(err));
});

router.post("/", (req, res) => {
  const { title, text } = req.body;

  readFile("./db/db.json")
    .then((data) => {
      const currentNotes = JSON.parse(data);
      currentNotes.push({ title, text });
      const allNotes = JSON.stringify(currentNotes, null, 2);

      writeFile("./db/db.json", allNotes).then((data) => {
        res.status(201).json({
            status: 'success',
            body: data,
          });
      });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
