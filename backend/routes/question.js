const express = require('express')
let Question = require('../models/question.model');
const router = express.Router();

// ______________________show all question ______________________


router.get('/', (req, res) => {
  Question.find()
    .populate('Category')
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error :" + err));
});



// ______________________get question by id__________________
router.get('/:id', (req, res) => {
  Question.findById({
      _id: `${req.params.id}`
    })
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error :" + err));
});

//______________________ add question______________________

router.route("/add").post((req, res) => {
  const question = req.body.question;
  const correctAnswer = req.body.correctAnswer;
  const incorrectAnswer1 = req.body.incorrectAnswer1;
  const incorrectAnswer2 = req.body.incorrectAnswer2;
  const incorrectAnswer3 = req.body.incorrectAnswer3;
  const nameCategory = req.body.nameCategory;
  const questionPush = new Question({
    question,
    correctAnswer,
    incorrectAnswer1,
    incorrectAnswer2,
    incorrectAnswer3,
    nameCategory
  });
  questionPush
    .save()
    .then(() => res.json("Question successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//__________________ get question's category to updated__________________ 

// router.get('/update/:id', (req,res) =>{

//   Question.findById(req.params.id)
//   .populate('category')
//   .then((question) => res.json(question))
//   .catch((err) => res.status(400).json("Error :" + err));
// });
//______________________updating question______________________
router.route("/update/:id").put((req, res) => {


    // Find  and update it with the request body

    Question.findByIdAndUpdate(req.params.id,{
      question: req.body.question,
      correctAnswer: req.body.correctAnswer,
      incorrectAnswer1: req.body.incorrectAnswer1,
      incorrectAnswer2: req.body.incorrectAnswer2,
      incorrectAnswer3: req.body.incorrectAnswer3,
      nameCategory: req.body.nameCategory,

    })

    .then(() => res.status(201).json("Question updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
})

//______________________deleting question______________________

router.delete('/delete/:id', (req, res) => {
  const {id} = req.params;
  Question.findOneAndDelete({ _id: id})
    .exec((err, post) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: 'There was an error deleting the Question',
          error: err
        })
      res.status(200).json({
        code: 200,
        message: 'Question deleted Succesfully',
        deletedPost: post
      })
    });
})

module.exports = router;