const express = require('express');

const router = express.Router();
const todoController = require('../controllers/toDoController');
router.get('/', todoController.home); //rendering todo


router.post("/create",todoController.create_post) //route to add to database



router.get("/delete",todoController.delete) //remove from database


module.exports = router;