import express from "express";
import { userMiddleware } from "../../middlewares/user.middleware.js";
import  {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from  '../../middlewares/verifyToken'
import {
    addCart,
    updateCart,
    deleteCart,
    getCart,
    gettAllCart
} from "../../controller/cart";


const CartRouter = express.Router();

CartRouter.post("/", verifyToken, addCart);
CartRouter.put("/id", verifyTokenAndAuthorization, updateCart);
CartRouter.delete("/:id",verifyTokenAndAuthorization,deleteCart);
CartRouter.get("/find/:userId", verifyTokenAndAuthorization, getCart);
CartRouter.post("/logout", verifyTokenAndAdmin, gettAllCart);


export default CartRouter;