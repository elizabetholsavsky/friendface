const router = require('express').Router();
const { 
    getAllThoughts, 
    getSingleThought, 
    // createThought,
    // updateThought,
    // removeThought,
    // createReaction,
    // removeReaction
} = require('../../controllers/thoughtsController');

/*    /api/thoughts    */
router
    .route('/')
    .get(getAllThoughts);
//     .post(createThought)

/*    /api/thoughts/:thoughtId    */
router
    .route('/:thoughtId')
    .get(getSingleThought);
//     .put(updateThought)
//     .delete(removeThought);


// /*    /api/thoughts/:thoughtId/reactions    */
// router
//     .route('/:thoughtId/reactions')
//     .post(createReaction)
//     .delete(removeReaction);

module.exports = router;