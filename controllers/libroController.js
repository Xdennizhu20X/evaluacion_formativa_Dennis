const Libro = require('../model/libroModel');

exports.createBook = async (req, res) => {
  try {
    const { titulo, autor, fechaPublicacion, genero, copiasDisponibles } = req.body;
    let urlPortada = null;

    if (req.file) {
      urlPortada = `/uploads/${req.file.filename}`;
    }

    const nuevoLibro = new Libro({
      titulo,
      autor,
      fechaPublicacion,
      genero,
      copiasDisponibles,
      urlPortada,
    });

    const libro = await nuevoLibro.save();
    res.status(201).json({ message: 'Libro creado exitosamente', libro });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
    res.status(200).json(libro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
    res.status(200).json({ message: 'Libro actualizado exitosamente', libro });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
    res.status(200).json({ message: 'Libro eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
