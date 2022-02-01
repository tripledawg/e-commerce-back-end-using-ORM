// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  //correct?? 
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
  //correct?? 
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'id,'//'id'?
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,
  {
    foreignKey: 'id'//'id'?
  })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
