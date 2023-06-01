const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/api/appointmentCont');

// GET cart
router.get('/cart', appointmentCtrl.cart);

// GET history
router.get('/history', appointmentCtrl.history);

// POST addToCart
router.post('/cart/appointment/:id', appointmentCtrl.addToCart);

// POST checkout
router.post('/cart/checkout', appointmentCtrl.checkout);

// PUT setItemQtyInCart
router.put('/cart/qty', appointmentCtrl.setItemQty);

module.exports = router;
