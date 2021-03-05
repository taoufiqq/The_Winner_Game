const express = require('express')
let Category = require('../models/category.model');
const router = express.Router();

//______________________get all category_____________________ 


router.get('/', (req, res) => {
  Category.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("Error :" + err));
});

// ______________________get category by id__________________
router.get('/:id', (req, res) => {
  Category.findById({
      _id: `${req.params.id}`
    })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("Error :" + err));
});

//__________________________add category____________________

router.route("/add").post((req, res) => {
  const nameCategory = req.body.nameCategory;
  const categoryPush = new Category({
    nameCategory
  });
  categoryPush
    .save()
    .then(() => res.json("Category successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//________________________updating category____________________
router.route('/update/:id').put((req, res) => {

  Category.updateOne({
      _id: req.params.id
    }, {
      nameCategory: req.body.nameCategory
    })
    .then(() => res.status(201).json("Category updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));

});
//___________________________delete Category______________________

router.delete('/delete/:id', (req, res) => {
  const {id} = req.params;
  Category.findOneAndDelete({_id: id})
    .exec((err, post) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: 'There was an error deleting the Category',
          error: err
        })
      res.status(200).json({
        code: 200,
        message: 'Category deleted successfully',
        deletedPost: post
      })
    });
})

module.exports = router;