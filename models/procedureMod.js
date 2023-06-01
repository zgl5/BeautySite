const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  type: { type: String, unique: true },
  description: String,
  img: String,
  price: String
});

const Procedure = mongoose.model('Procedure', procedureSchema);

// to Mongo
const beautydata = [
  {
    type: 'Classic Facial',
    description:
      'A classic facial involves the basic steps of skincare namely cleansing, steaming, exfoliation and a face mask. It focuses on hydrating, rejuvenating and maintaining skin hygiene through the removal of blackheads and whiteheads.',
    img: './images/face.jpg',
    price: '$10'
  },
  {
    type: 'Microcurrent Facial',
    description:
      'A microcurrent facial device is used to stimulate cell renewal and collagen production with low-volt electrical waves.',
    img: '/images/facial.jpg',
    price: '$20'
  },
  {
    type: 'Collagen Wave Facial',
    description:
      'A collagen wave facial has the ability to contour your features in just one sitting. Radiofrequency waves used in this non-invasive facial target tissues in the deeper layers of your skin.',
    img: '/images/eye.jpg',
    price: '$15'
  }
];

Procedure.insertMany(beautydata)
  .then(() => console.log('All procedures saved on MongoDB'))
  .catch(err => console.error('Cannot save procedures:', err));

  module.exports = Procedure;