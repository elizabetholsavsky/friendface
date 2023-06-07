const router = require('express').Router();
const { 
    getAllThoughts, 
    getSingleThought, 
    createThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thoughtsController');

/*    /api/thoughts    */
router
    .route('/')
    .get(getAllThoughts)
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(removeThought);

/*    /api/thoughts/:thoughtId/reactions    */
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(removeReaction);

module.exports = router;