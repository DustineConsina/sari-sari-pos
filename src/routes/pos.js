const express = require('express');
const { requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/posController');

const router = express.Router();

// Larawan ng produkto: pwedeng makita ng sinumang naka-login (admin o cashier).
// Dapat nakalagay ito BAGO ang requireRole sa ibaba.
router.get('/product-image/:id', ctrl.productImage);

router.use(requireRole('sales_rep'));

router.get('/', ctrl.posScreen);
router.get('/api/products', ctrl.searchProducts);
router.post('/checkout', ctrl.postCheckout);
router.get('/receipt/:id', ctrl.viewReceipt);

router.get('/inventory', ctrl.inventoryScreen);
router.post('/inventory/report', ctrl.postInventoryReport);

module.exports = router;