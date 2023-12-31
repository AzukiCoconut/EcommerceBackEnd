const router = require('express').Router();
const {Tag, Product, ProductTag} = require('../../models');

// READ all tags
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll();
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ tag by specific id
router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id);

        if (!tagData) {
            res.status(404).json({message: 'No tags found with that id!'});
            return;
        }

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE tag
router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch {
        res.status(400).json(err)
    }
});

// UPDATE Tag
router.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!tagData[0]) {
            res.status(404).json({message: 'No tag with this id!'});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE Tag
router.delete('/:id', async (req, res) =>{
    try {
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!tagData) {
            res.status.apply(404).json({message: 'No category with this id!'});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;