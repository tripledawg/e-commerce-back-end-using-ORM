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

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  const singleCategory = await Category.findByPk(req.params.id, {
    include: [
      { model: Product }
    ]
  });
  if (singleCategory) {
    res.status(200).json(singleCategory);
  }
  else {
    res.status(404).json('No category found.');
  }
});

  // create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {

      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => {

    res.status(200).json(category);
  })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

 // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({ where: { id: req.params.id } })
    .then((category) => {

      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
