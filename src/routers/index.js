import express from "express";
import AuthRouter from "./user/auth.router.js"
import CartRouter from "./user/user.router.js"
import UserRouter from "./user/user.router.js"
import OrderRouter from "./order/order.router.js"
import ProductRoute from "./product/product.router.js"
import PaymentRoute from "./payment/payment.router.js"

const rootRouter = express.Router();

rootRouter.use("/api/auth", AuthRouter);
rootRouter.use("/api/users", UserRouter);
rootRouter.use("/api/carts", CartRouter);
rootRouter.use("/api/orders", OrderRouter);
rootRouter.use("/api/products", ProductRoute)
rootRouter.use("/api/checkout", PaymentRoute)


export default rootRouter;



