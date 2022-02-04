const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    const findAllCat = await Category.findAll({
      include: [
        { model: Product }
      ]
    });
    if (findAllCat) {
      res.status(200).json(findAllCat);
    }
    else {
      res.status(404).json('No categories found.');
    }
  });


  router.get('/:id', async (req, res) => {
    const singleCategory = await Category.findByPk(req.params.id, {
      include: [
        { model: Product }
      ]
    });
    if (singleProduct) {
      res.status(200).json(singleCategory);
    }
    else {
      res.status(404).json('No category found.');
    }
  });
  // find one category by its `id` value
  // be sure to include its associated Products

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
});

module.exports = router;
