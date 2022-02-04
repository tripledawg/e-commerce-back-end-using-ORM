const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    const findAllTags = await Tag.findAll({
      include: [
        { model: Product },
      ]
    });
    if (findAllTags) {
      res.status(200).json(findAllTags);
    }
    else {
      res.status(404).json('No tags found.');
    }
  });


  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product },
      ]
    });
    if (singleTag) {
      res.status(200).json(singleTag);
    }
    else {
      res.status(404).json('No tag found.');
    }
  });

router.post('/', (req, res) => {
  // create a new tag
    Tag.create(req.body)
      .then((tag) => {
        
        res.status(200).json(tag);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  });


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
    Tag.destroy({ where: { id: req.params.id } })
  });
  

module.exports = router;
