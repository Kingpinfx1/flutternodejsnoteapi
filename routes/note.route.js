const express = require("express");
const Note = require("../models/note");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const note = await Note.find({});
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const note = await Note.findById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.put('/:id', async (req, res) => {
      try {
    const {id} = req.params;

    const note = await Note.findByIdAndUpdate(id, req.body);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    const updatedNote = await Note.findById(id);
    res.status(200).json(updatedNote);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const note = await Note.findByIdAndDelete(id);

        if (!note) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



module.exports = router;