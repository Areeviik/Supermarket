const { Router } = require("express");
const router = Router();
const productRouter = require('./products');
const cartRouter = require('./cart');
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const orderRoutes = require("./order.routes");

router.use('/api/cart', cartRouter);
router.use('/api', productRouter);
router.use('/api', authRoutes);
router.use('/api', userRoutes);
router.use('/api/order', orderRoutes);


module.exports = router