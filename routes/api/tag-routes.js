const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    const findAllTags = await Tag.findAll({
      include: [
        { model: Product }
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

  // create a new tag
router.post('/', (req, res) => {
    Tag.create(req.body)
      .then((tag) => {
        
        res.status(200).json(tag);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((tag) => {
      console.log(tag);
      res.status(200).json(tag);
    })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
  });

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
    Tag.destroy({ where: { id: req.params.id } })
    .then((tag) => {

      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  

module.exports = router;
