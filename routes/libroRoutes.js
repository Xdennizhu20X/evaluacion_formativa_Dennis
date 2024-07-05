const express = require('express');
const router = express.Router();
const bookController = require('../controllers/libroController');
const upload = require('../config/uploadConfig');

router.post('/libros', upload.single('urlPortada'), bookController.createBook);
router.get('/libros', bookController.getAllBooks);
router.get('/libros/:id', bookController.getBookById);
router.put('/libros/:id', upload.single('urlPortada'), bookController.updateBook);
router.delete('/libros/:id', bookController.deleteBook);

module.exports = router;
