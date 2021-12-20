const router = require("express").Router();
const short = require('short-uuid');
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
      currentNotes.push({ id: short.uuid(), title, text });
      const allNotes = JSON.stringify(currentNotes, null, 2);

      return writeFile("./db/db.json", allNotes);
    })
    .then((data) => {
      res.status(201).json({
        status: "success",
        body: data,
      });
    })
    .catch((err) => console.error(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  readFile("./db/db.json")
    .then((data) => {
      const currentNotes = JSON.parse(data);
      const remainingNotesAfterDel = currentNotes.filter((currentNote) => currentNote.id != id);
      const allNotes = JSON.stringify(remainingNotesAfterDel, null, 2);

      return writeFile("./db/db.json", allNotes);
    })
    .then((data) => {
      res.status(204).json({
        status: "success",
        // body: data,
      });
    })
    .catch((err) => console.error(err));

});

module.exports = router;
