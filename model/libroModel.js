const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  fechaPublicacion: {
    type: Date,
  },
  genero: {
    type: String,
  },
  copiasDisponibles: {
    type: Number,
    default: 0,
  },
  urlPortada: {
    type: String,
  },
});

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;
