// Create web server

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// Create a comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        