const express = require('express');
const router = express.Router();
const Female = require('../../models/Female'); // Female model
const Male = require('../../models/Male'); // Male model

// @route GET api/names
// @desc Get all names
// @access Public

router.get('/female', (req, res) => {
    Female.find()
        .then(names => res.json(names))
})

router.get('/male', (req, res) => {
    Male.find()
        .then(names => res.json(names))
})

// @route POST api/names
// @desc Create a name
// @access Public

router.post('/female', (req, res) => {
    const newName = new Female({
        name: req.body.name
    })

    newName.save().then(name => res.json(name));
})

router.post('/male', (req, res) => {
    const newName = new Male({
        name: req.body.name
    })

    newName.save().then(name => res.json(name));
})


// @route DELETE api/names
// @desc Delete a name
// @access Public

router.delete('/female/:id', (req, res) => {
    Female.findById(req.params.id)
        .then(name => name.remove().then(() => res.json({ success : true })))
        .catch(err => res.status(404).json({success : false}))
})

router.delete('/male/:id', (req, res) => {
    Female.findById(req.params.id)
        .then(name => name.remove().then(() => res.json({ success : true })))
        .catch(err => res.status(404).json({success : false}))
})

module.exports = router;



