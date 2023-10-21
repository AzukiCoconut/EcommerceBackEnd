const Product = require('./Product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false,
        onDelete: 'CASCADE'
    },
    as: 'product_tags'
});

Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false,
        onDelete: 'CASCADE'
    },
    as: 'tag_products'
});

module.exports = { Category, Product, Tag, ProductTag };

