const Product = require('./Product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

// Category has many products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// Product belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Product will have many tags
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false,
        onDelete: 'CASCADE'
    },
    as: 'product_tags'
});

// Tags will belong to many products
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false,
        onDelete: 'CASCADE'
    },
    as: 'tag_products'
});

module.exports = { Category, Product, Tag, ProductTag };

