const router = require('express').Router();
const { Product, ProductTag, Category, Tag } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: [{ model: Category}, { model: Tag, through: ProductTag, as: 'product_tags'}],
        });
        res.status(200).json(productData);
    } catch {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [{model: Category}, { model: Tag, through: ProductTag, as: 'product_tags'}],
        });
        if (!productData) {
            res.status(404).json({message: 'No product found with that id!'});
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
                return {
                    product_id: product.id,
                    tag_id,
                };
            });
            const productTagIds = await ProductTag.bulkCreate(productTagIdArr);
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (req.body.product_name || req.body.price || req.body.stock || req.body.category_id) {
            const product = await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            if (!product[0]) {
                res.status(404).json({message: 'No product with this id!'});
                return;
            }
        }
        if (req.body.tagIds && req.body.tagIds.length) {
            const productTags = await ProductTag.findAll({
                where: { product_id: req.params.id },
            });
            const productTagIds = productTags.map(({tag_id}) => tag_id);
            const newProductTags = req.body.tagIds.filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
                return {
                    product_id: req.params.id,
                    tag_id,
                };
            });
            const productTagsToRemove = productTags.filter(({tag_id}) => !req.body.tagIds.includes(tag_id))
            .map(({id}) => id);
            let deleteTags;
            let createTags;    
            deleteTags = await ProductTag.destroy({where: {id: productTagsToRemove}});
            createTags = await ProductTag.bulkCreate(newProductTags);
            
            res.status(200).json({message: "Update complete"});
            
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const productData = await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!productData) {
            res.status(404).json({message: 'No product with this id!'});
            return;
        }
        res.status(200).json(productData);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;